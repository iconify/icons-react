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
		"content": `<style>.bin3-2lxw {
  fill: currentColor;
  d: path("M5.616 22q-.667 0-1.141-.475T4 20.386V3.615q0-.666.475-1.14T5.615 2h12.77q.666 0 1.14.475T20 3.614v16.77q0 .666-.475 1.14t-1.14.475zM5 16.538h14V5.5H5zm5.616 3.116h2.769q.154 0 .269-.112q.115-.111.115-.273t-.115-.273t-.27-.111h-2.768q-.154 0-.27.111q-.115.112-.115.273t.115.273t.27.112");
}
</style><path class="bin3-2lxw"/>`,
		"fallback": "material-symbols-light:tablet-android-rounded",
	});
}

export default Component;
