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
		"content": `<style>.j9j13ebcd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.0886 4.0045L18.82 4.6865C20.8483 6.5779 22 9.2267 22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 9.2267 3.1517 6.5779 5.18 4.6865L5.9114 4.0045M12 1L12 10.7563");
}
</style><path class="j9j13ebcd"/>`,
		"fallback": "keyline-icons:power-sharp",
	});
}

export default Component;
