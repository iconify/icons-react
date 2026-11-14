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
		"content": `<style>.k_up22b6b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m4.03 2.97l17 17q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094l-17-17q-.053-.052-.094-.113t-.069-.13t-.043-.141T2.75 3.5t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069t.113.094m3.72 1.952L6.416 3.588Q6.789 2.75 8 2.75h8q1.75 0 1.75 1.75v2.75h.75q2.75 0 2.75 2.75v5q0 1.711-1.064 2.357L10.078 7.25h6.172V4.5q0-.25-.25-.25H8q-.25 0-.25.25zm7.5 16.328q1.586 0 2.166-1.006L4.574 7.402q-.563.198-1.019.653Q2.75 8.861 2.75 10v5q0 2.75 2.75 2.75h.75v1q0 2.5 2.5 2.5z");
}
</style><path class="k_up22b6b"/>`,
		"fallback": "uix-solid:print-off",
	});
}

export default Component;
