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
		"content": `<style>.aiurajbxq {
  fill: currentColor;
  d: path("M7 17v-2h5q-.35-.425-.562-.925T11.1 13H5v-2h6.1q.125-.575.338-1.075T12 9H7V7h9q2.075 0 3.538 1.463T21 12t-1.463 3.538T16 17zm9-2q1.25 0 2.125-.875T19 12t-.875-2.125T16 9t-2.125.875T13 12t.875 2.125T16 15M3 17v-2h3v2zm13-5");
}
</style><path class="aiurajbxq"/>`,
		"fallback": "material-symbols:trail-length-medium-outline",
	});
}

export default Component;
