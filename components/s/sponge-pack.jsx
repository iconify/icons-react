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
		"content": `<style>.mv87b2nsw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 3.75h9q1.346 0 2.298.952T22.25 7q0 3.038-2.841 3.236q.341.712.341 1.764q0 3.038-2.841 3.236q.341.712.341 1.764q0 3.25-3.25 3.25H5q-3.25 0-3.25-3.25q0-1.346.952-2.298q.805-.805 1.893-.929Q4.25 13.059 4.25 12q0-1.346.952-2.298q.805-.805 1.893-.929Q6.75 8.059 6.75 7q0-3.25 3.25-3.25");
}
</style><path class="mv87b2nsw"/>`,
		"fallback": "uix-solid:sponge-pack",
	});
}

export default Component;
