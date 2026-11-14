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
		"content": `<style>.uya-4ekln {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 2.75h10.25q2.123 0 3.624 1.501t1.501 3.624v8.25q0 2.123-1.501 3.624t-3.624 1.501H6.875q-2.123 0-3.624-1.501T1.75 16.125v-8.25q0-2.123 1.501-3.624T6.875 2.75m.655 5.72q-.052-.053-.113-.094t-.13-.069t-.141-.043T7 8.25t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.106.105-.163.243T6.25 9t.057.287t.163.243L8.939 12L6.47 14.47q-.106.105-.163.243T6.25 15t.057.287t.163.243q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094l3-3q.106-.105.163-.243T10.75 12t-.057-.287t-.163-.243zm6.72.28Q12 8.75 12 11v2.5q0 2.25 2.25 2.25t2.25-2.25V11q0-2.25-2.25-2.25");
}
</style><path class="uya-4ekln"/>`,
		"fallback": "uix-solid:terminal-cursor",
	});
}

export default Component;
