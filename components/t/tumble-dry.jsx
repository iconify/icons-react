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
		"content": `<style>.j2yvd0bcm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 1.75h10q1.76 0 3.005 1.245T21.25 6v.25q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T20.5 5.5h-17q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146V6q0-1.76 1.245-3.005T7 1.75m-4.25 4.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043T3.5 7h17q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V18q0 1.76-1.245 3.005T17 22.25H7q-1.76 0-3.005-1.245T2.75 18zM6.5 14q0 2.278 1.611 3.889T12 19.5t3.889-1.611T17.5 14t-1.611-3.889T12 8.5t-3.889 1.611T6.5 14");
}
</style><path class="j2yvd0bcm"/>`,
		"fallback": "uix-solid:tumble-dry",
	});
}

export default Component;
