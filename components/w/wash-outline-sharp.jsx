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
		"content": `<style>.qt-wz9bik {
  fill: currentColor;
  d: path("M16.378 7.409q-.609-.61-.609-1.391q0-.7.46-1.58t1.54-2.15q1.081 1.27 1.54 2.15t.46 1.58q0 .78-.61 1.39q-.611.611-1.392.611t-1.389-.61M18 21H3v-9.563l9.26-6l.894.97l-2.277 3.785H19v1H9.104l2.483-4.138L4 11.973V20h14zm-5-6.538v-1h8v1zm0 3.269v-1h7v1zm-4.5-3.916");
}
</style><path class="qt-wz9bik"/>`,
		"fallback": "material-symbols-light:wash-outline-sharp",
	});
}

export default Component;
