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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.lc77vgwqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.694 20.208v6.102m-10.672-.515c.42.353.874.515 1.893.515h.517c.84 0 1.522-.683 1.522-1.526c0-.842-.682-1.525-1.522-1.525h-1.033c-.84 0-1.522-.683-1.522-1.525c0-.843.681-1.526 1.522-1.526h.516c1.02 0 1.473.162 1.894.515m3.399-2.414v6.85c0 .635.516 1.15 1.152 1.15h.345M31 20.208h2.417M11.5 24.007a2.302 2.302 0 0 0 4.605 0v-1.496a2.302 2.302 0 0 0-4.605 0m0-2.303v9.21");
}

.m10sgvb2w {
  cx: 35.694px;
  cy: 17.388px;
  r: 0.75px;
  fill: currentColor;
}

.x6rnyj15c {
  width: 4.605px;
  height: 6.101px;
  x: 18.388px;
  y: 20.208px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.302px;
  ry: 2.302px;
}
</style><path class="i9clfwm2k"/><rect class="x6rnyj15c"/><circle class="m10sgvb2w"/><path class="lc77vgwqc"/>`,
		"fallback": "arcticons:omaposti",
	});
}

export default Component;
