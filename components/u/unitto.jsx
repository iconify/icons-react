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
		"content": `<style>.a1avulv-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.874 16.162h6");
}

.axkimqiur {
  cx: 31.874px;
  cy: 29.095px;
  r: 0.75px;
  fill: currentColor;
}

.dl5q2-iaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.041 29.717l4.242 4.242m0-4.242l-4.242 4.242");
}

.io7pybbza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.874 31.838h6");
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

.m8tr-6iqg {
  cx: 31.874px;
  cy: 34.581px;
  r: 0.75px;
  fill: currentColor;
}

.uvirt1llh {
  cx: 16.162px;
  cy: 16.162px;
  r: 6.662px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vtx1p2bow {
  cx: 16.162px;
  cy: 31.838px;
  r: 6.662px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xbhloiyil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.162 16.162h6m-3-3v6");
}

.xiq-grbep {
  cx: 31.838px;
  cy: 16.162px;
  r: 6.662px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zak09ablu {
  cx: 31.838px;
  cy: 31.838px;
  r: 6.662px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><circle class="uvirt1llh"/><path class="xbhloiyil"/><circle class="xiq-grbep"/><path class="a1avulv-w"/><circle class="zak09ablu"/><circle class="m8tr-6iqg"/><circle class="axkimqiur"/><path class="io7pybbza"/><circle class="vtx1p2bow"/><path class="dl5q2-iaa"/>`,
		"fallback": "arcticons:unitto",
	});
}

export default Component;
