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
		"content": `<style>.xym_tf81z {
  fill: currentColor;
  d: path("M7 22q-.425 0-.712-.288T6 21t.288-.712T7 20h4v-2q0-.425.288-.712T12 17t.713.288T13 18v2h4q.425 0 .713.288T18 21t-.288.713T17 22zM8 2h8q1.65 0 2.825 1.175T20 6v9.5q0 1.45-1.025 2.475T16.5 19H15q-.425 0-.712-.288T14 18q0-.825-.587-1.412T12 16t-1.412.588T10 18q0 .425-.288.713T9 19H7.5q-1.45 0-2.475-1.025T4 15.5V6q0-1.65 1.175-2.825T8 2M6 7v3h12V7z");
}
</style><path class="xym_tf81z"/>`,
		"fallback": "material-symbols:monorail-rounded",
	});
}

export default Component;
