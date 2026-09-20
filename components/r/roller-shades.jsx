import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z3ssl-bhu {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h12v-6h-5v1.8q.35.25.55.625t.2.825q0 .725-.513 1.238T12 18t-1.237-.513t-.513-1.237q0-.45.2-.812t.55-.613V13H6z");
}
</style><path class="z3ssl-bhu"/>`,
		"fallback": "material-symbols:roller-shades",
	});
}

export default Component;
