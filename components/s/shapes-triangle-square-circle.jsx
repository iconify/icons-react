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
		"content": `<style>.kvrgvobsk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.144 5.115l1.409 2.349q.75 1.25.031 2.518q-.718 1.268-2.175 1.268h-2.818q-1.457 0-2.175-1.268q-.719-1.268.031-2.518l1.409-2.349Q10.584 3.901 12 3.901t2.144 1.214M7.875 12.75h-2.25q-1.398 0-2.386.989q-.989.988-.989 2.386v2.25q0 1.398.989 2.386q.988.989 2.386.989h2.25q3.375 0 3.375-3.375v-2.25q0-3.375-3.375-3.375m4.875 4.5q0-1.864 1.318-3.182t3.182-1.318t3.182 1.318t1.318 3.182t-1.318 3.182t-3.182 1.318t-3.182-1.318t-1.318-3.182");
}
</style><path class="kvrgvobsk"/>`,
		"fallback": "uix-solid:shapes-triangle-square-circle",
	});
}

export default Component;
