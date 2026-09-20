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
		"content": `<style>.njgw6bbzn {
  fill: currentColor;
  d: path("M9.95 21q-.675 0-1.287-.288T7.625 19.9L1.15 11.925l.65-.625q.475-.475 1.125-.55t1.175.3L7 13.075V3q0-.425.288-.712T8 2t.713.288T9 3v13.925l-2.775-1.95l2.95 3.65q.15.175.35.275t.425.1H17q.825 0 1.413-.587T19 17v-7q0-.425.288-.712T20 9t.713.288T21 10v7q0 1.65-1.175 2.825T17 21zM11 13V7q0-.425.288-.712T12 6t.713.288T13 7v6zm4 0V8q0-.425.288-.712T16 7t.713.288T17 8v5z");
}
</style><path class="njgw6bbzn"/>`,
		"fallback": "material-symbols:pan-tool-alt-outline",
	});
}

export default Component;
