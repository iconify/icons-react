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
		"content": `<style>.jzi6hohfc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.5 2.75h-17q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h7.75v2.5H7.375q-2.123 0-3.624 1.501T2.25 11.875v5.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624v-5.25q0-2.123-1.501-3.624T16.625 6.75H12.75v-2.5h7.75q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014M8.818 11.318Q10.136 10 12 10t3.182 1.318T16.5 14.5t-1.318 3.182T12 19t-3.182-1.318T7.5 14.5t1.318-3.182");
}
</style><path class="jzi6hohfc"/>`,
		"fallback": "uix-solid:measure-mass",
	});
}

export default Component;
