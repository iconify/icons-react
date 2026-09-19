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
		"content": `<style>.fnltd8uti {
  cx: 39.081px;
  cy: 18.973px;
  r: 2.919px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.klykpxb3z {
  cx: 39.081px;
  cy: 29.027px;
  r: 2.919px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mv_rnfbza {
  cx: 18.973px;
  cy: 8.919px;
  r: 2.919px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.myxslybuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 6v36h36v-5.838H11.838V6z");
}

.n6sd4nb9d {
  cx: 29.027px;
  cy: 8.919px;
  r: 2.919px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zqw47pbsn {
  cx: 39.081px;
  cy: 8.919px;
  r: 2.919px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="mv_rnfbza"/><circle class="n6sd4nb9d"/><circle class="zqw47pbsn"/><circle class="fnltd8uti"/><circle class="klykpxb3z"/><path class="myxslybuf"/>`,
		"fallback": "arcticons:latitude",
	});
}

export default Component;
