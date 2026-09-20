import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":263};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x6zq3sesi {
  fill: var(--svg-color--222c37, #222c37);
  d: path("m166.872 131.237l45.91-79.275l22.184 79.275l-22.185 79.256zm-22.376 12.874l45.916 79.262l-79.966-20.486l-57.77-58.776zm45.906-105.033l-45.906 79.275h-91.82l57.77-58.78zm65.539 65.18L227.933.06l-104.54 27.925l-15.475 27.207l-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232l15.497 27.207l104.528 27.92L255.94 158.22l-15.906-26.982z");
}
</style><path class="x6zq3sesi"/>`,
		"fallback": "logos:unity",
	});
}

export default Component;
