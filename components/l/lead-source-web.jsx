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
		"content": `<style>.u48gzmrib {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 1.25H6.875q-2.123 0-3.624 1.501T1.75 6.375v6.75q0 2.123 1.501 3.624t3.624 1.501h4.375v2H8q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T7.25 21q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h8q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 20.25h-3.25v-2h4.375q2.123 0 3.624-1.501t1.501-3.624v-6.75q0-2.123-1.501-3.624T17.125 1.25M6.5 9.75q0-2.278 1.611-3.889T12 4.25t3.889 1.611T17.5 9.75t-1.611 3.889T12 15.25t-3.889-1.611T6.5 9.75");
}
</style><path class="u48gzmrib"/>`,
		"fallback": "uix-solid:lead-source-web",
	});
}

export default Component;
