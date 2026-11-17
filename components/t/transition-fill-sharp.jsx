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
		"content": `<style>.me5kfn2oc {
  fill: currentColor;
  d: path("M5 10a7 7 0 0 1 13.989-.403l1.304-1.304a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414l1.275 1.275A5 5 0 0 0 7 10v2a1 1 0 0 1-2 0Zm-1.764 6.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m12 0a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
}
</style><path class="me5kfn2oc"/>`,
		"fallback": "coolicons:transition-fill-sharp",
	});
}

export default Component;
