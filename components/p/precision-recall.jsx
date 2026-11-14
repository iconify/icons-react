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
		"content": `<style>.ims-oggjn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75q3.866 0 6.701 2.489l-5.731 5.73v.001q-.106.105-.163.243t-.057.287t.057.287t.163.243t.243.163t.287.057h.01q.087 0 .171-.02t.163-.058q.078-.039.145-.095q.067-.055.119-.124l5.653-5.654Q22.25 8.134 22.25 12q0 4.246-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m17.53-9.78l2.5 2.5q.106.105.163.243T22 5.25t-.057.287t-.163.243q-.052.053-.113.094t-.13.069t-.141.043T21.25 6q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094l-2.5-2.5q-.106-.105-.163-.243T18 2.75t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043T18.75 2t.146.014q.073.015.141.043t.13.069q.061.041.113.094");
}
</style><path class="ims-oggjn"/>`,
		"fallback": "uix-solid:precision-recall",
	});
}

export default Component;
