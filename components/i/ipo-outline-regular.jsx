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
		"content": `<style>.umcye1bji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15V8a3 3 0 0 1 6 0v7Zm0 -4 -3 3v3h3m6 -6 3 3v3h-3m-3 -2v5");
}
</style><path class="umcye1bji"/>`,
		"fallback": "iconmind:ipo-outline-regular",
	});
}

export default Component;
