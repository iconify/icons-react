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
		"content": `<style>.exux_6r9o {
  fill: currentColor;
  d: path("M3 23v-4.2q-.875-.3-1.437-1.062T1 16V6h2V2q0-.425.288-.712T4 1t.713.288T5 2v4h2v10q0 .975-.562 1.738T5 18.8V23zm8 0v-4.2q-.875-.3-1.437-1.062T9 16V6h2V2q0-.425.288-.712T12 1t.713.288T13 2v4h2v10q0 .975-.562 1.738T13 18.8V23zm8 0v-4.2q-.875-.3-1.437-1.062T17 16V6h2V2q0-.425.288-.712T20 1t.713.288T21 2v4h2v10q0 .975-.562 1.738T21 18.8V23zM3 8v4h2V8zm8 0v4h2V8zm8 0v4h2V8zM4 17q.425 0 .713-.288T5 16v-2H3v2q0 .425.288.713T4 17m8 0q.425 0 .713-.288T13 16v-2h-2v2q0 .425.288.713T12 17m8 0q.425 0 .713-.288T21 16v-2h-2v2q0 .425.288.713T20 17m0-4");
}
</style><path class="exux_6r9o"/>`,
		"fallback": "material-symbols:settings-input-component-outline",
	});
}

export default Component;
