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
		"content": `<style>.vu257c2ao {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.5q-2.75 0-2.75 2.75T12 7t2.75-2.75T12 1.5m.75 10.311v1.378l7.28 7.281q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094L12 14.561L5.03 21.53q-.105.106-.243.163t-.287.057t-.287-.057t-.243-.163q-.053-.052-.094-.113t-.069-.13t-.043-.141T3.75 21t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113l7.28-7.281V9q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T12 8.25t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v.689l5.22-5.219q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243T19.25 5t-.057.287t-.163.243z");
}
</style><path class="vu257c2ao"/>`,
		"fallback": "uix-solid:triangle-pose",
	});
}

export default Component;
