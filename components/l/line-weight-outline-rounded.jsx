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
		"content": `<style>.dah3rcbmn {
  fill: currentColor;
  d: path("M3.5 20q-.2 0-.35-.15T3 19.5t.15-.35t.35-.15h17q.2 0 .35.15t.15.35t-.15.35t-.35.15zm.5-3q-.425 0-.712-.288T3 16t.288-.712T4 15h16q.425 0 .713.288T21 16t-.288.713T20 17zm0-4q-.425 0-.712-.288T3 12v-1q0-.425.288-.712T4 10h16q.425 0 .713.288T21 11v1q0 .425-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7V5q0-.425.288-.712T4 4h16q.425 0 .713.288T21 5v2q0 .425-.288.713T20 8z");
}
</style><path class="dah3rcbmn"/>`,
		"fallback": "material-symbols:line-weight-outline-rounded",
	});
}

export default Component;
