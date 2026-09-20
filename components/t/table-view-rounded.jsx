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
		"content": `<style>.gqmpd801m {
  fill: currentColor;
  d: path("M8 22h5v-4H6v2q0 .825.588 1.413T8 22m7 0h5q.825 0 1.413-.587T22 20v-2h-7zM3 18q-.425 0-.712-.288T2 17V4q0-.825.588-1.412T4 2h13q.425 0 .713.288T18 3t-.288.713T17 4H4v13q0 .425-.288.713T3 18m3-2h7v-4H6zm9 0h7v-4h-7zm-9-6h16V8q0-.825-.587-1.412T20 6H8q-.825 0-1.412.588T6 8z");
}
</style><path class="gqmpd801m"/>`,
		"fallback": "material-symbols:table-view-rounded",
	});
}

export default Component;
