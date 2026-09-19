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
		"content": `<style>.bx-t0imev {
  width: 7.852px;
  height: 7.852px;
  x: 21.211px;
  y: 15.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.c2ohrqbmb {
  width: 7.852px;
  height: 7.852px;
  x: 12.428px;
  y: 28.779px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.epdfsobmm {
  width: 7.852px;
  height: 7.852px;
  x: 34.23px;
  y: 24.544px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.hokrbwbnp {
  width: 7.852px;
  height: 7.852px;
  x: 14.701px;
  y: 11.369px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.ntiv0m99n {
  width: 7.852px;
  height: 7.852px;
  x: 27.72px;
  y: 20.152px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.p5frc0h-e {
  width: 7.852px;
  height: 7.852px;
  x: 8.192px;
  y: 6.977px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.rz1gcsbiz {
  width: 7.852px;
  height: 7.852px;
  x: 5.918px;
  y: 24.387px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.wcdvsccxs {
  width: 7.852px;
  height: 7.852px;
  x: 16.819px;
  y: 22.27px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.xtqq--bfb {
  width: 7.852px;
  height: 7.852px;
  x: 18.937px;
  y: 33.171px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}

.z0geh8bpy {
  width: 7.852px;
  height: 7.852px;
  x: 25.602px;
  y: 9.251px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.274px;
}
</style><rect transform="rotate(-55.994 29.528 13.177)" class="z0geh8bpy"/><rect transform="rotate(-55.994 25.137 19.686)" class="bx-t0imev"/><rect transform="rotate(-55.994 31.646 24.078)" class="ntiv0m99n"/><rect transform="rotate(-55.994 20.745 26.196)" class="wcdvsccxs"/><rect transform="rotate(-55.994 16.354 32.705)" class="c2ohrqbmb"/><rect transform="rotate(-55.994 22.863 37.097)" class="xtqq--bfb"/><rect transform="rotate(-55.994 9.844 28.314)" class="rz1gcsbiz"/><rect transform="rotate(-55.994 18.628 15.295)" class="hokrbwbnp"/><rect transform="rotate(-55.994 38.156 28.47)" class="epdfsobmm"/><rect transform="rotate(-55.994 12.118 10.903)" class="p5frc0h-e"/>`,
		"fallback": "arcticons:planesandroid",
	});
}

export default Component;
