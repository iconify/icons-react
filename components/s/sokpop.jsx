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
		"content": `<style>.kur09x1jt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.59 35.11c9.75.867 11.453 7.056 11.453 7.056M36.45 19.235c-5.962 3.064-7.467 10.036-6.046 15.546M21.735 7.704l.275 3.042m2.508-3.35l.226 2.864m2.735-3.074l.291 2.33m2.556-2.233l.292 1.942m2.56-1.796l.239 1.399");
}

.zi3fm5ucp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.644 5.989L34.695 4.5s3.948 17.863 0 23.947s-13.009 20.84-20.905 12.621s7.637-18.834 7.443-19.999s-2.589-15.08-2.589-15.08");
}
</style><path class="zi3fm5ucp"/><path class="kur09x1jt"/>`,
		"fallback": "arcticons:sokpop",
	});
}

export default Component;
