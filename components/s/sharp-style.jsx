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
		"content": `<style>.y08gwd-ot {
  fill: currentColor;
  d: path("M3.87 20.21v-9.03l-3.19 7.7zm18.92-2.43L16.31 2.14L5.26 6.71l6.48 15.64zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-2 13h3.45l-3.45-8.34z");
}
</style><path class="y08gwd-ot"/>`,
		"fallback": "ic:sharp-style",
	});
}

export default Component;
