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
		"content": `<style>.p0os0j2xt {
  fill: currentColor;
  d: path("M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zM20 15.002h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20zh.75zm0-4h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20zh.75zm0-4h.75a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20zh.75zm-5.246-1.505H8.25a.75.75 0 0 0-.743.649l-.007.101v1.504c0 .38.283.693.649.743l.101.007h6.503a.75.75 0 0 0 .743-.648l.007-.102V6.247a.75.75 0 0 0-.75-.75");
}
</style><path class="p0os0j2xt"/>`,
		"fallback": "fluent:notebook-24-filled",
	});
}

export default Component;
