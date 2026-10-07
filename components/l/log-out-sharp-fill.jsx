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
		"content": `<style>.cucmds3jf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 4L3 4L3 20L10 20M20.7586 12L9.1093 12M14.8562 6.204L21 12L14.8562 17.796");
}
</style><path class="cucmds3jf"/>`,
		"fallback": "keyline-icons:log-out-sharp-fill",
	});
}

export default Component;
