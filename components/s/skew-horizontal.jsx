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
		"content": `<style>.oa5aud-ko {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m18.03 2.97l-1.5-1.5q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 1.25t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13q-.028.068-.043.141T15.25 2t.014.146q.015.073.043.141t.069.13t.094.113l.219.22H9q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043T9 4.25h6.689l-.219.22q-.053.052-.094.113t-.069.13t-.043.141T15.25 5t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094l1.5-1.5q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243m-8.8 4.28h8.78q1.299 0 2.046 1.062t.307 2.285l-3.24 9q-.596 1.654-2.353 1.653H5.99q-1.299 0-2.046-1.062t-.307-2.285l3.24-9Q7.473 7.25 9.23 7.25");
}
</style><path class="oa5aud-ko"/>`,
		"fallback": "uix-solid:skew-horizontal",
	});
}

export default Component;
