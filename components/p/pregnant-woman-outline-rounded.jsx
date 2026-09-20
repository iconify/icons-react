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
		"content": `<style>.bwk_ii75z {
  fill: currentColor;
  d: path("M10.73 21.039V16h-.922q-.348 0-.578-.23T9 15.192V9.423Q9 8.577 9.577 8T11 7.423T12.423 8T13 9.423q.9.24 1.45 1.008t.55 1.723v3.038q0 .349-.23.578t-.578.23h-1.961v4.692q0 .349-.23.578t-.578.23h-.23q-.195 0-.328-.134q-.134-.133-.134-.327M9.799 5.278q-.491-.492-.491-1.201t.491-1.201T11 2.385t1.201.491t.491 1.201t-.491 1.201q-.492.491-1.201.491t-1.201-.491");
}
</style><path class="bwk_ii75z"/>`,
		"fallback": "material-symbols-light:pregnant-woman-outline-rounded",
	});
}

export default Component;
