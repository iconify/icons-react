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
		"content": `<style>.w5ktgebbn {
  fill: currentColor;
  d: path("M3 11q-.425 0-.712-.288T2 10V5q0-.425.288-.712T3 4h18q.425 0 .713.288T22 5v5q0 .425-.288.713T21 11zm8 9q-.425 0-.712-.288T10 19v-5q0-.425.288-.712T11 13h10q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20zm-8 0q-.425 0-.712-.288T2 19v-5q0-.425.288-.712T3 13h4q.425 0 .713.288T8 14v5q0 .425-.288.713T7 20z");
}
</style><path class="w5ktgebbn"/>`,
		"fallback": "material-symbols:view-comfy-rounded",
	});
}

export default Component;
