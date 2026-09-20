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
		"content": `<style>.qyq5g-i1l {
  fill: currentColor;
  d: path("M7 14v7q0 .425-.288.713T6 22t-.712-.288T5 21V3q0-.425.288-.712T6 2t.713.288T7 3v1h12.525q.525 0 .825.438t.1.937L19 9l1.45 3.625q.2.5-.1.938t-.825.437zm6.913-3.588Q14.5 9.826 14.5 9t-.587-1.412T12.5 7t-1.412.588T10.5 9t.588 1.413T12.5 11t1.413-.587");
}
</style><path class="qyq5g-i1l"/>`,
		"fallback": "material-symbols:tour-rounded",
	});
}

export default Component;
