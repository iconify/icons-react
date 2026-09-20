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
		"content": `<style>.sljn9cbau {
  fill: currentColor;
  d: path("M4 15.5q-.425 0-.712-.288T3 14.5V14q0-.425.288-.712T4 13h16q.425 0 .713.288T21 14v.5q0 .425-.288.713T20 15.5zM4 11q-.425 0-.712-.288T3 10v-.5q0-.425.288-.712T4 8.5h16q.425 0 .713.288T21 9.5v.5q0 .425-.288.713T20 11zm0-4.5q-.425 0-.712-.288T3 5.5V5q0-.425.288-.712T4 4h16q.425 0 .713.288T21 5v.5q0 .425-.288.713T20 6.5zM4 20q-.425 0-.712-.288T3 19v-.5q0-.425.288-.712T4 17.5h16q.425 0 .713.288T21 18.5v.5q0 .425-.288.713T20 20z");
}
</style><path class="sljn9cbau"/>`,
		"fallback": "material-symbols:table-rows-narrow-rounded",
	});
}

export default Component;
