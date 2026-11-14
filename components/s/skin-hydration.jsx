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
		"content": `<style>.kmgnklshj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.336 2.967l-.75-.936q-.052-.065-.117-.117q-.117-.093-.26-.134t-.292-.025q-.148.016-.279.088q-.13.072-.224.188l-.75.936Q4.25 10.959 4.25 14.5q0 3.21 2.27 5.48T12 22.25t5.48-2.27t2.27-5.48q0-3.541-6.414-11.533M12.53 14.47q1.47 1.469 2.94 0q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243q-2.53 2.531-5.06 0q-1.47-1.469-2.94 0q-.052.053-.113.094t-.13.069t-.141.043T8 15.75t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.106-.105-.163-.243T7.25 15t.057-.287t.163-.243q2.53-2.531 5.06 0");
}
</style><path class="kmgnklshj"/>`,
		"fallback": "uix-solid:skin-hydration",
	});
}

export default Component;
