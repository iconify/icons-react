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
		"content": `<style>.flvxn2zzh {
  fill: currentColor;
  d: path("M23 16.495037C23 18.686603 20.380714 19.817496 18.785617 18.314623L13.628494 13.455669C12.790502 12.666127 12.790502 11.333873 13.628494 10.544331L18.785617 5.685378C20.380715 4.182505 23 5.313398 23 7.504964ZM11 16.495037C11 18.686603 8.380715 19.817496 6.785617 18.314623L1.628493 13.455669C0.790501 12.666127 0.790501 11.333873 1.628493 10.544331L6.785617 5.685377C8.380715 4.182504 11 5.313397 11 7.504963Z");
}
</style><path class="flvxn2zzh"/>`,
		"fallback": "keyline-icons:rewind-fill",
	});
}

export default Component;
