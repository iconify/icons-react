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
		"content": `<style>.cijfirbsm {
  fill: currentColor;
  d: path("M5 20v1.25q0 .425-.288.713T4 22.25H3q-.425 0-.712-.288T2 21.25V19q0-.425.288-.712T3 18h18q.425 0 .713.288T22 19v2.25q0 .425-.288.713T21 22.25h-1q-.425 0-.712-.288T19 21.25V20h-5.5v1.25q0 .425-.288.713t-.712.287h-1q-.425 0-.712-.288t-.288-.712V20zm1-4q-.425 0-.712-.288T5 15V3q0-.425.288-.712T6 2h12q.425 0 .713.288T19 3v12q0 .425-.288.713T18 16zm1-2h10V4H7zm7-6q.425 0 .713-.288T15 7t-.288-.712T14 6h-4q-.425 0-.712.288T9 7t.288.713T10 8zm-7 6V4z");
}
</style><path class="cijfirbsm"/>`,
		"fallback": "material-symbols:pallet-outline-rounded",
	});
}

export default Component;
