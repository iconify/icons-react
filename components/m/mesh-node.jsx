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
		"content": `<style>.l3zj70bcs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.25Q8.25 1.25 8.25 5q0 2.163 1.247 3.078l-3.384 6.77Q5.605 14.75 5 14.75q-3.75 0-3.75 3.75T5 22.25q3.354 0 3.708-3h6.584q.354 3 3.708 3q3.75 0 3.75-3.75T19 14.75q-.605 0-1.113.098l-3.384-6.77Q15.75 7.163 15.75 5q0-3.75-3.75-3.75m3.292 16.5H8.708q-.186-1.58-1.205-2.328l3.384-6.77q.508.098 1.113.098t1.113-.098l3.384 6.77q-1.019.748-1.205 2.328");
}
</style><path class="l3zj70bcs"/>`,
		"fallback": "uix-solid:mesh-node",
	});
}

export default Component;
