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
		"content": `<style>.l190hfw4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.836 22.617c3.548-3.813 8.563-3.842 12.102-.068");
}

.rpcdn2beb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.459 27.8v14.26h8.992V27.8Zm.518-3.56c1.907-1.996 5.74-2.022 7.82-.046");
}

.v7vtjqz6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.676 40.962h9.669v-22.47L25.949 5.94m4.147 0h8.249v8.699z");
}

.wteluczbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.605 20.025c5.234-5.342 11.038-5.189 16.813 0");
}

.xjawe0bzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.95 5.94H9.654v35.022h9.669");
}
</style><path class="xjawe0bzn"/><path class="v7vtjqz6p"/><path class="rpcdn2beb"/><path class="l190hfw4r"/><path class="wteluczbm"/>`,
		"fallback": "arcticons:libreoffice-impress-remote",
	});
}

export default Component;
