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
		"content": `<style>.qu2w0nkyq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.52 22.076q-.317-.264-1.031-.845Q2.75 14.929 2.75 11q.001-3.831 2.71-6.539T12 1.753t6.54 2.708T21.25 11q0 3.929-7.739 10.231q-.714.581-1.031.845q-.05.042-.107.074q-.056.033-.118.055t-.125.034q-.065.011-.13.011t-.13-.011q-.064-.012-.125-.034q-.062-.022-.118-.055q-.057-.032-.107-.074M8.288 7.288Q6.75 8.825 6.75 11t1.538 3.712Q9.825 16.25 12 16.25t3.712-1.538Q17.25 13.175 17.25 11t-1.538-3.712Q14.175 5.75 12 5.75T8.288 7.288");
}
</style><path class="qu2w0nkyq"/>`,
		"fallback": "uix-solid:pin-road-closed",
	});
}

export default Component;
