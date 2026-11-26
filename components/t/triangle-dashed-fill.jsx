import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a7gr7nbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.8653 8.5934L14.4051 4.3922C13.3181 2.536 10.6819 2.536 9.5949 4.3922L7.1347 8.5934M4.8608 12.4765L2.4006 16.6777C1.2854 18.5822 2.6307 21 4.8057 21L9.75 21M14.25 21L19.1943 21C21.3693 21 22.7146 18.5822 21.5994 16.6777L19.1392 12.4765");
}
</style><path class="a7gr7nbrx"/>`,
		"fallback": "keyline-icons:triangle-dashed-fill",
	});
}

export default Component;
