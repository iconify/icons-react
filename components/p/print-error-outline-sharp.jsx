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
		"content": `<style>.tarangbsf {
  fill: currentColor;
  d: path("M6 21v-4H2V8h19.825v2H4v5h2v-2h10v2H8v4h8v2zM6 8V3h12v5h-2V5H8v3zm12.288 12.713Q18 20.425 18 20t.288-.712T19 19t.713.288T20 20t-.288.713T19 21t-.712-.288M18 17v-5h2v5zM4 10h17.825z");
}
</style><path class="tarangbsf"/>`,
		"fallback": "material-symbols:print-error-outline-sharp",
	});
}

export default Component;
