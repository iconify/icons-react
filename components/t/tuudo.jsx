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
		"content": `<style>.fvfizpb2v {
  width: 4.551px;
  height: 6.029px;
  x: 33.95px;
  y: 21.521px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.275px;
  ry: 2.275px;
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.lxfm2abvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.852 21.521v3.754a2.275 2.275 0 0 0 2.275 2.276h0a2.275 2.275 0 0 0 2.276-2.276v-3.754m0 3.754v2.275m2.139-6.029v3.754a2.275 2.275 0 0 0 2.275 2.276h0a2.275 2.275 0 0 0 2.275-2.276v-3.754m0 3.754v2.275m-14.398-7.906v7.906M9.5 21.521h2.389m19.857 2.275a2.275 2.275 0 0 0-2.275-2.275h0a2.275 2.275 0 0 0-2.276 2.275v1.48a2.275 2.275 0 0 0 2.276 2.274h0a2.275 2.275 0 0 0 2.275-2.275m0 2.275v-9.1");
}
</style><rect class="j3s9ivbxi"/><rect class="fvfizpb2v"/><path class="lxfm2abvq"/>`,
		"fallback": "arcticons:tuudo",
	});
}

export default Component;
