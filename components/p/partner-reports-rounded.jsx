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
		"content": `<style>.hx-3cbb9g {
  fill: currentColor;
  d: path("M11.509 16.417q-.201-.198-.201-.491t.198-.494t.491-.201t.494.198t.201.491t-.198.494t-.491.201t-.494-.198m.134-3.715q-.143-.143-.143-.356V4.5q0-.213.144-.356T12.001 4t.356.144t.143.356v7.846q0 .213-.144.357t-.357.143t-.356-.143M5.616 20q-.691 0-1.153-.462T4 18.384v-1.923q0-.212.144-.356t.357-.143t.356.143t.143.357v1.923q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-1.923q0-.213.144-.357t.357-.143t.356.143t.143.357v1.923q0 .69-.462 1.153T18.384 20z");
}
</style><path class="hx-3cbb9g"/>`,
		"fallback": "material-symbols-light:partner-reports-rounded",
	});
}

export default Component;
