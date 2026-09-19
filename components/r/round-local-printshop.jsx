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
		"content": `<style>.zbta1ez1s {
  fill: currentColor;
  d: path("M18 7V4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3zm1 1H5c-1.66 0-3 1.34-3 3v5c0 .55.45 1 1 1h3v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h3c.55 0 1-.45 1-1v-5c0-1.66-1.34-3-3-3m-3 11H8v-4h8zm2-6.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="zbta1ez1s"/>`,
		"fallback": "ic:round-local-printshop",
	});
}

export default Component;
