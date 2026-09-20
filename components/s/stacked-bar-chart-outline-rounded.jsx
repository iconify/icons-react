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
		"content": `<style>.fo4a_7liz {
  fill: currentColor;
  d: path("M5 20q-.425 0-.712-.288T4 19v-9q0-.425.288-.712T5 9h2q.425 0 .713.288T8 10v9q0 .425-.288.713T7 20zM5 8q-.425 0-.712-.288T4 7V5q0-.425.288-.712T5 4h2q.425 0 .713.288T8 5v2q0 .425-.288.713T7 8zm6 12q-.425 0-.712-.288T10 19v-6q0-.425.288-.712T11 12h2q.425 0 .713.288T14 13v6q0 .425-.288.713T13 20zm0-9q-.425 0-.712-.288T10 10V8q0-.425.288-.712T11 7h2q.425 0 .713.288T14 8v2q0 .425-.288.713T13 11zm6 9q-.425 0-.712-.288T16 19v-3q0-.425.288-.712T17 15h2q.425 0 .713.288T20 16v3q0 .425-.288.713T19 20zm0-6q-.425 0-.712-.288T16 13v-2q0-.425.288-.712T17 10h2q.425 0 .713.288T20 11v2q0 .425-.288.713T19 14z");
}
</style><path class="fo4a_7liz"/>`,
		"fallback": "material-symbols:stacked-bar-chart-outline-rounded",
	});
}

export default Component;
