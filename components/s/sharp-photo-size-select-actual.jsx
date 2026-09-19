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
		"content": `<style>.d0zzatbid {
  fill: currentColor;
  d: path("M23 3H1v18h22zM5 17l3.5-4.5l2.5 3.01L14.5 11l4.5 6z");
}
</style><path class="d0zzatbid"/>`,
		"fallback": "ic:sharp-photo-size-select-actual",
	});
}

export default Component;
