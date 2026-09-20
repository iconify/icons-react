import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cfmj0jb1q {
  d: path("m28.871 13.733l5.396 5.396l-2.732 2.733l-5.397-5.397M31.603 11L37 16.397l-2.733 2.732M20.414 24.24c-.274-.957 0-2.05.751-2.802c1.161-1.161 3.006-1.093 4.099 0l1.366 1.367c1.161 1.16 1.093 3.005 0 4.098c-.751.752-1.844 1.025-2.8.752m2.117-5.534l-2.528 2.528M16.397 37L11 31.603l8.129 2.664l-2.664-8.129l5.397 5.397");
}

.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle transform="rotate(-88.777 24 24)" class="f_v_dfbgn"/><path class="cfmj0jb1q"/></g>`,
		"fallback": "arcticons:moscow-electronic-school",
	});
}

export default Component;
