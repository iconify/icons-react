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
		"content": `<style>.iu4s1zbeu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5H6L11 4v13.5L6 13H2.5Zm12-.75q.19.212.351.446q.162.235.292.488q.131.253.229.52t.161.545t.091.56q.028.284.02.568q-.008.285-.052.566t-.122.554m-.256.678q-.279.589-.714 1.075M17 5.5q.283.325.529.679t.454.733q.207.378.372.776q.165.399.286.813t.197.838t.106.855t.014.861t-.079.858M18 14.75v3.5M18 21h.01");
}
</style><path class="iu4s1zbeu"/>`,
		"fallback": "uix-sharp:warning-loud-noise",
	});
}

export default Component;
