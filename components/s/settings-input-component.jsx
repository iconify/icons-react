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
		"content": `<style>.yl9zlxb9x {
  fill: currentColor;
  d: path("M3 23v-4.2q-.875-.3-1.437-1.062T1 16v-2h6v2q0 .975-.562 1.738T5 18.8V23zm8 0v-4.2q-.875-.3-1.437-1.062T9 16v-2h6v2q0 .975-.562 1.738T13 18.8V23zm8 0v-4.2q-.875-.3-1.437-1.062T17 16v-2h6v2q0 .975-.562 1.738T21 18.8V23zM1 12V6h2V2q0-.425.288-.712T4 1t.713.288T5 2v4h2v6zm8 0V6h2V2q0-.425.288-.712T12 1t.713.288T13 2v4h2v6zm8 0V6h2V2q0-.425.288-.712T20 1t.713.288T21 2v4h2v6z");
}
</style><path class="yl9zlxb9x"/>`,
		"fallback": "material-symbols:settings-input-component",
	});
}

export default Component;
