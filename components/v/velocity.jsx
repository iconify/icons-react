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
		"content": `<style>.sxrs4ccfk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m18.03 2.47l3 3q.106.105.163.243T21.25 6t-.057.287t-.163.243l-3 3q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.106-.105-.163-.243T16.75 9t.057-.287t.163-.243l1.671-1.672q-6.074.322-9.649 2.817q-3.437 2.398-3.717 6.199q1.975.355 1.975 2.686q0 2.75-2.75 2.75T1.75 18.5q0-2.358 2.021-2.694q.284-4.576 4.362-7.421q3.976-2.774 10.598-3.093L16.97 3.53q-.106-.105-.163-.243T16.75 3t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094");
}
</style><path class="sxrs4ccfk"/>`,
		"fallback": "uix-solid:velocity",
	});
}

export default Component;
