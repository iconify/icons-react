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
		"content": `<style>.t04okcc1h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.5 2.75h9q1.76 0 3.005 1.245T20.75 7v10q0 1.76-1.245 3.005T16.5 21.25h-9q-1.76 0-3.005-1.245T3.25 17V7q0-1.76 1.245-3.005T7.5 2.75m2 3.5H9q-2.25 0-2.25 2.25V9q0 2.25 2.25 2.25h.5q2.25 0 2.25-2.25v-.5q0-2.25-2.25-2.25m5 0q-2.25 0-2.25 2.25V9q0 2.25 2.25 2.25h.5q2.25 0 2.25-2.25v-.5q0-2.25-2.25-2.25zm-5 6H9q-2.25 0-2.25 2.25v.5q0 2.25 2.25 2.25h.5q2.25 0 2.25-2.25v-.5q0-2.25-2.25-2.25m5.51 2H15q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h.01q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="t04okcc1h"/>`,
		"fallback": "uix-solid:qr-label",
	});
}

export default Component;
