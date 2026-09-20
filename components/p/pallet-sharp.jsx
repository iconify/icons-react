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
		"content": `<style>.v_whpiodg {
  fill: currentColor;
  d: path("M2 22v-4h20v4h-3v-2h-5.5v2h-3v-2H5v2zm3-6V2h14v14zm4-8h6V6H9z");
}
</style><path class="v_whpiodg"/>`,
		"fallback": "material-symbols:pallet-sharp",
	});
}

export default Component;
