import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lkv_gtb1e {
  fill: currentColor;
  d: path("m213.33 203.75l-28.45-89.41L212.43 84a6 6 0 0 0-8.88-8l-22.87 25.17l-18.26-57.42A13.94 13.94 0 0 0 149.08 34h-42.16a13.94 13.94 0 0 0-13.34 9.75l-50.91 160A14 14 0 0 0 56 222h144a14 14 0 0 0 13.34-18.25ZM187.45 162h-45.89l34-37.39ZM105 47.39a2 2 0 0 1 1.92-1.39h42.16a2 2 0 0 1 1.92 1.39l20.36 64l-46 50.61H68.55Zm96.6 161.79a1.94 1.94 0 0 1-1.6.82H56a2 2 0 0 1-1.9-2.61L64.73 174h126.54l10.62 33.39a1.94 1.94 0 0 1-.29 1.79");
}
</style><path class="lkv_gtb1e"/>`,
		"fallback": "ph:metronome-light",
	});
}

export default Component;
