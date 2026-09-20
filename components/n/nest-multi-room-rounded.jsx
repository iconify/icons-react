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
		"content": `<style>.n6ct3hbhl {
  fill: currentColor;
  d: path("M5 21q-.425 0-.712-.288T4 20v-2q0-.425.288-.712T5 17h7q.425 0 .713.288T13 18v2q0 .425-.288.713T12 21zm11 0q-.425 0-.712-.288T15 20v-2q0-.425.288-.712T16 17h3q.425 0 .713.288T20 18v2q0 .425-.288.713T19 21zM5 15q-.425 0-.712-.288T4 14v-2q0-.425.288-.712T5 11h3q.425 0 .713.288T9 12v2q0 .425-.288.713T8 15zm7 0q-.425 0-.712-.288T11 14v-2q0-.425.288-.712T12 11h7q.425 0 .713.288T20 12v2q0 .425-.288.713T19 15zM5.5 9q-.35 0-.462-.337T5.2 8.1l5.6-4.2q.275-.2.575-.3T12 3.5t.625.1t.575.3l5.6 4.2q.275.225.163.563T18.5 9z");
}
</style><path class="n6ct3hbhl"/>`,
		"fallback": "material-symbols:nest-multi-room-rounded",
	});
}

export default Component;
