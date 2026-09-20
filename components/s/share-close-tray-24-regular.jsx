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
		"content": `<style>.fipn2jbbr {
  fill: currentColor;
  d: path("M2 17.75A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75V6.25A2.25 2.25 0 0 0 19.75 4H4.25A2.25 2.25 0 0 0 2 6.25zm2.25.75a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75zM12 16.755a.75.75 0 0 0 .53-.22l3.255-3.255a.75.75 0 1 0-1.06-1.06l-1.975 1.974V7.747a.75.75 0 0 0-1.5 0v6.445L9.28 12.22a.75.75 0 1 0-1.06 1.06l3.25 3.255c.14.14.33.22.53.22");
}
</style><path class="fipn2jbbr"/>`,
		"fallback": "fluent:share-close-tray-24-regular",
	});
}

export default Component;
