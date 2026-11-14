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
		"content": `<style>.z9dfjqndf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.25 12.783q-2.24.205-3.873 1.656Q5.25 16.33 5.25 19.5q0 2.75 6.75 2.75t6.75-2.75q0-3.17-2.127-5.061q-1.633-1.451-3.873-1.656V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q12.074 1.75 12 1.75t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146zm5.735 4.624Q15.299 16.75 12 16.75t-4.985.657Q7.929 14.25 12 14.25t4.985 3.157");
}
</style><path class="z9dfjqndf"/>`,
		"fallback": "uix-solid:unclog-drain",
	});
}

export default Component;
