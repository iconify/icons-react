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
		"content": `<style>.yo4vm6v1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.403 17.485l-10.06 5.807V11.677Zm-10.265-5.808l-11.95-.196m12.154 4.099H10.931m10.241 3.586H8.54m12.495 4.126H10.452");
}

.zafcw4bfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.153 43.5V23.364m0-12.054V4.5h12.415a12.892 12.892 0 1 1 0 25.784H14.153");
}
</style><path class="zafcw4bfr"/><path class="yo4vm6v1y"/>`,
		"fallback": "arcticons:programming-hub",
	});
}

export default Component;
