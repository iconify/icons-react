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
		"content": `<style>.e_23eebjy {
  fill: currentColor;
  d: path("M5.23 11.23v1.54h1.54v-1.54zm3 0v1.54h1.54v-1.54zm3 0v1.54h1.54v-1.54zm-6-3v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm.462 12.559l-.688-.689l2.055-2.1h-4.867v-1h4.868l-2.056-2.1l.688-.688l3.289 3.288zM3 18V6h18v6.89q-.496-.363-1.066-.6q-.57-.238-1.165-.363v-.696h-1.538v.622q-.39.028-.753.107q-.363.078-.709.198v-.927h-1.538v1.538h.315q-.44.296-.802.665t-.675.797H8.231v1.538h4.061q-.144.413-.205.848q-.062.435-.062.883q0 .138.003.256q.003.119.014.244z");
}
</style><path class="e_23eebjy"/>`,
		"fallback": "material-symbols-light:keyboard-external-input-sharp",
	});
}

export default Component;
