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
		"content": `<style>.puwhztkgt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.834 10.166Q15.687 8.02 12.75 7.78V5.25H14q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q14.074 3.75 14 3.75h-4q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.25v2.53q-2.937.24-5.084 2.386q-2.161 2.162-2.389 5.125q-.736.132-1.295.691q-.732.732-.732 1.768q0 2.5 2.5 2.5h15.5q1.036 0 1.768-.732t.732-1.768t-.732-1.768q-.559-.559-1.295-.691q-.228-2.963-2.389-5.125m.879 5.084H5.287q.234-2.317 1.94-4.023Q9.204 9.25 12 9.25t4.773 1.977q1.706 1.706 1.94 4.023");
}
</style><path class="puwhztkgt"/>`,
		"fallback": "uix-solid:reception-bell",
	});
}

export default Component;
