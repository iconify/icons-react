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
		"content": `<style>.pa89g4f3d {
  fill: currentColor;
  d: path("M7 17v-2h6q-.35-.425-.562-.925T12.1 13H9v-2h3.1q.125-.575.338-1.075T13 9H3V7h14q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm10-2q1.25 0 2.125-.875T20 12t-.875-2.125T17 9t-2.125.875T14 12t.875 2.125T17 15M2 13v-2h6v2zm1 4v-2h3v2z");
}
</style><path class="pa89g4f3d"/>`,
		"fallback": "material-symbols:motion-blur",
	});
}

export default Component;
