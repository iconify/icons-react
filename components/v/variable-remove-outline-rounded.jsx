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
		"content": `<style>.mnhc0ebpw {
  fill: currentColor;
  d: path("M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7h16q.425 0 .713.288T21 8v1q0 .425-.288.713T20 10t-.712-.288T19 9H5v6h8q.425 0 .713.288T14 16t-.288.713T13 17zm1-2V9zm14.5 1.925L18.1 18.3q-.275.275-.687.288T16.7 18.3q-.275-.275-.275-.7t.275-.7l1.4-1.4l-1.4-1.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.4 1.4l1.4-1.4q.275-.275.687-.287t.713.287q.275.275.275.7t-.275.7l-1.375 1.4l1.375 1.4q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z");
}
</style><path class="mnhc0ebpw"/>`,
		"fallback": "material-symbols:variable-remove-outline-rounded",
	});
}

export default Component;
