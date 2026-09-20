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
		"content": `<style>.jcd5nob3v {
  fill: currentColor;
  d: path("M9.95 21q-.675 0-1.287-.288T7.625 19.9L1.15 11.925l.65-.625q.475-.475 1.125-.55t1.175.3L7 13.075V3q0-.425.288-.712T8 2t.713.288T9 3v8h2V7q0-.425.288-.712T12 6t.713.288T13 7v4h2V8q0-.425.288-.712T16 7t.713.288T17 8v3h2v-1q0-.425.288-.712T20 9t.713.288T21 10v7q0 1.65-1.175 2.825T17 21z");
}
</style><path class="jcd5nob3v"/>`,
		"fallback": "material-symbols:pan-tool-alt",
	});
}

export default Component;
