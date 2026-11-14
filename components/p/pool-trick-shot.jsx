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
		"content": `<style>.alcus7bux {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.818 3.318Q13.5 4.636 13.5 6.5t1.318 3.182T18 11t3.182-1.318T22.5 6.5t-1.318-3.182T18 2t-3.182 1.318M7.172 17.567Q6.189 19.75 3 19.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q4.159 0 5.54-3.066q.764-1.697.783-5.803Q9.345 7.25 11.5 7.25q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-2.48 0-3.257 2.29q-.407 1.199-.42 4.335q-.017 3.786-.651 5.192");
}
</style><path class="alcus7bux"/>`,
		"fallback": "uix-solid:pool-trick-shot",
	});
}

export default Component;
