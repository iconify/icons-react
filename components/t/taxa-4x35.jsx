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
		"content": `<style>.d0qj4hd0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.929 15.837c7.398 0 19.571-.265 19.571 3.567s-7.221 12.763-11.171 12.763s-21.429-3.39-24.435-5.483S3.5 21.585 3.5 19.315s10.7-3.478 21.429-3.478m.373 3.302L31.047 24m0-4.861L25.302 24m-14.728-4.861h5.745M13.446 24v-4.861m3.421 4.847l2.817-4.847M22.504 24l-2.82-4.861m1.876 3.235h-3.756m16.167 1.612l2.817-4.847M39.607 24l-2.819-4.861m1.876 3.235h-3.756");
}
</style><path class="d0qj4hd0u"/>`,
		"fallback": "arcticons:taxa-4x35",
	});
}

export default Component;
