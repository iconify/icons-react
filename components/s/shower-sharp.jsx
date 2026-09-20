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
		"content": `<style>.czgnc-bro {
  fill: currentColor;
  d: path("M8 18q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m4 0q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m4 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18M5 14v-2q0-2.65 1.7-4.6T11 5.1V3h2v2.1q2.6.35 4.3 2.3T19 12v2zm3 7q-.425 0-.712-.288T7 20t.288-.712T8 19t.713.288T9 20t-.288.713T8 21m4 0q-.425 0-.712-.288T11 20t.288-.712T12 19t.713.288T13 20t-.288.713T12 21m4 0q-.425 0-.712-.288T15 20t.288-.712T16 19t.713.288T17 20t-.288.713T16 21");
}
</style><path class="czgnc-bro"/>`,
		"fallback": "material-symbols:shower-sharp",
	});
}

export default Component;
