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
		"content": `<style>.i6f0ex1qb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM7.9542 16.328L8.1088 16.4893C8.4234 16.8174 8.8582 17.0029 9.3127 17.0029C10.0573 17.0029 10.7116 16.5094 10.9161 15.7934L13.0839 8.2066C13.2884 7.4906 13.9427 6.9971 14.6873 6.9971C15.1418 6.9971 15.5766 7.1826 15.8912 7.5107L16.0458 7.672M9.4985 10.8882L15.0573 10.8882");
}
</style><path class="i6f0ex1qb"/>`,
		"fallback": "keyline-icons:square-function-sharp-two-tone",
	});
}

export default Component;
