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
		"content": `<style>.f2areab0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.827 21.857v2.669a1.617 1.617 0 0 1-3.235 0v-2.669");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.klyr753ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.063 23.474c0-.893.724-1.617 1.617-1.617m-1.617 0v4.286M39.5 19.674v6.469m-30.15-5.62v4.811c0 .447.361.809.808.809h.242m-1.9-4.286h1.698m12.818 4.286v-2.669a1.617 1.617 0 0 0-3.235 0m0 2.669v-4.286m-1.921 3.47a1.617 1.617 0 0 1-3.023-.801v-1.052a1.617 1.617 0 0 1 3.235 0V24h-3.234m13.098-.526a1.617 1.617 0 0 0-3.235 0v1.052a1.617 1.617 0 0 0 3.235 0m0 1.617v-6.469M42.5 34h-37m37-20h-37");
}

.ty_qnh7mo {
  width: 3.235px;
  height: 4.286px;
  x: 34.592px;
  y: 21.857px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.617px;
  ry: 1.617px;
}

.wpiyxsbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.827 24.526v2.183a1.617 1.617 0 0 1-2.761 1.143");
}
</style><path class="i9clfwm2k"/><path class="wpiyxsbur"/><path class="f2areab0j"/><rect class="ty_qnh7mo"/><path class="klyr753ov"/>`,
		"fallback": "arcticons:trendyol",
	});
}

export default Component;
