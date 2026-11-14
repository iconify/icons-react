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
		"content": `<style>.wg3xl7_bz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-2.75 2.75-2.75q2.345 0 2.69 2h2.12q.345-2 2.69-2t2.69 2h2.12q.345-2 2.69-2q2.75 0 2.75 2.75t-2.75 2.75q-2.345 0-2.69-2h-2.12q-.345 2-2.69 2t-2.69-2H7.19q-.345 2-2.69 2q-2.75 0-2.75-2.75");
}
</style><path class="wg3xl7_bz"/>`,
		"fallback": "uix-solid:progress-steps",
	});
}

export default Component;
