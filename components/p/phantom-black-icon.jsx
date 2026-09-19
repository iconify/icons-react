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
		"content": `<style>.s2yovib8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.857 21.357V42.5c-4.945-5.039-10.912-5.039-15.857 0c-4.945-5.039-10.912-5.039-15.857 0V21.357C9.458.214 38.53.214 39.857 21.357");
}

.v47jd3r3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.399 17.399c2.185 0 3.958 1.773 3.958 3.958s-1.774 3.97-3.958 3.97c-2.197 0-3.97-1.785-3.97-3.97s1.773-3.958 3.97-3.958m13.214 0c2.185 0 3.958 1.773 3.958 3.958s-1.773 3.97-3.958 3.97c-2.197 0-3.97-1.785-3.97-3.97s1.773-3.958 3.97-3.958");
}
</style><path class="s2yovib8j"/><path class="v47jd3r3d"/>`,
		"fallback": "arcticons:phantom-black-icon",
	});
}

export default Component;
