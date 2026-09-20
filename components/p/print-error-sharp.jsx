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
		"content": `<style>.isai6idtl {
  fill: currentColor;
  d: path("M18.288 20.713Q18 20.425 18 20t.288-.712T19 19t.713.288T20 20t-.288.713T19 21t-.712-.288M18 17v-5h2v5zM6 21v-4H2V8h19.825v2H16v5H8v4h8v2zM6 7V3h12v4z");
}
</style><path class="isai6idtl"/>`,
		"fallback": "material-symbols:print-error-sharp",
	});
}

export default Component;
