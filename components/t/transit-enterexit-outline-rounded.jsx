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
		"content": `<style>.t3jy876pt {
  fill: currentColor;
  d: path("M9.766 15.616h4.85q.355 0 .62.254q.264.255.264.63q0 .356-.264.62q-.265.264-.62.264H7.539q-.348 0-.578-.23q-.23-.229-.23-.577V9.5q0-.356.255-.62q.255-.265.63-.265q.355 0 .62.265q.264.264.264.62v4.827l6.854-6.854q.258-.257.638-.257t.639.257t.257.639t-.257.638z");
}
</style><path class="t3jy876pt"/>`,
		"fallback": "material-symbols-light:transit-enterexit-outline-rounded",
	});
}

export default Component;
