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
		"content": `<style>.owkxglbzm {
  fill: currentColor;
  d: path("M2 22v-4h20v4h-3v-2h-5.5v2h-3v-2H5v2zm4-6q-.425 0-.712-.288T5 15V3q0-.425.288-.712T6 2h12q.425 0 .713.288T19 3v12q0 .425-.288.713T18 16zm1-2h10V4H7zm2-6h6V6H9zm-2 6V4z");
}
</style><path class="owkxglbzm"/>`,
		"fallback": "material-symbols:pallet-outline",
	});
}

export default Component;
