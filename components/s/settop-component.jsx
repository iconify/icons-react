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
		"content": `<style>.uxasisbks {
  fill: currentColor;
  d: path("M2 17V7h20v10zm3-4h6v-2H5zm9.713-.288Q15 12.426 15 12t-.288-.712T14 11t-.712.288T13 12t.288.713T14 13t.713-.288m3 0Q18 12.426 18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13t.713-.288");
}
</style><path class="uxasisbks"/>`,
		"fallback": "material-symbols:settop-component",
	});
}

export default Component;
