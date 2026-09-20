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
		"content": `<style>.co0030vwu {
  fill: currentColor;
  d: path("M6.713 12.713Q7 12.425 7 12t-.288-.712T6 11t-.712.288T5 12t.288.713T6 13t.713-.288m4 0Q11 12.426 11 12t-.288-.712T10 11t-.712.288T9 12t.288.713T10 13t.713-.288m4 0Q15 12.426 15 12t-.288-.712T14 11t-.712.288T13 12t.288.713T14 13t.713-.288m4 0Q19 12.426 19 12t-.288-.712T18 11t-.712.288T17 12t.288.713T18 13t.713-.288M1 19V5h5.1V4h4.8v1H23v14zm20-2V7H3v10zM3 17V7z");
}
</style><path class="co0030vwu"/>`,
		"fallback": "material-symbols:mobile-dots-outline-sharp",
	});
}

export default Component;
