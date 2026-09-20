import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pvc3f-bvg {
  fill: currentColor;
  d: path("M2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5m1 4h4.5V13h-3A1.5 1.5 0 0 1 3 11.5zm4.5-1H3v-3A1.5 1.5 0 0 1 4.5 3h3zm1 1H13v3a1.5 1.5 0 0 1-1.5 1.5h-3zm4.5-1H8.5V3h3A1.5 1.5 0 0 1 13 4.5z");
}
</style><path class="pvc3f-bvg"/>`,
		"fallback": "fluent:table-simple-16-regular",
	});
}

export default Component;
