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
		"content": `<style>.t-4jb5qny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75q.69 5.06 5.75 5.75q-5.06.69-5.75 5.75q-.69-5.06-5.75-5.75q5.06-.69 5.75-5.75m0 11.5v7m2.75-15.5l1.5-1.5m-7 1.5l-1.5-1.5m7 7l1.5 1.5m-7-1.5l-1.5 1.5");
}
</style><path class="t-4jb5qny"/>`,
		"fallback": "iconoven:nativity-star",
	});
}

export default Component;
