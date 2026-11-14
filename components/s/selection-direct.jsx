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
		"content": `<style>.a9_cbxbxn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.5 7.412L8.387 4.855q-1.533-.766-2.8.388q-1.268 1.154-.648 2.752l2.154 5.556q.435 1.122 1.638 1.103q1.204-.02 1.602-1.156l.58-1.658q.168-.481.657-.628l1.646-.494q1.161-.348 1.265-1.556t-.981-1.75M7.717 6.197l5.113 2.557q.173.086.156.279t-.202.249l-1.646.494q-1.22.366-1.641 1.568l-.58 1.658q-.052.149-.21.152q-.159.002-.216-.145L6.337 7.453q-.248-.639.259-1.101t1.121-.155M17 14.75h2q2.25 0 2.25 2.25v2q0 2.25-2.25 2.25h-2q-2.25 0-2.25-2.25v-2q0-2.25 2.25-2.25");
}
</style><path class="a9_cbxbxn"/>`,
		"fallback": "uix-solid:selection-direct",
	});
}

export default Component;
