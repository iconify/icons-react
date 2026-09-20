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
		"content": `<style>.neta7r8vp {
  fill: currentColor;
  d: path("M8 10.75a.75.75 0 0 1 .75-.75h2.5V7.75a.75.75 0 0 1 1.5 0V10h2.5a.75.75 0 0 1 0 1.5h-2.5v2.25a.75.75 0 0 1-1.5 0V11.5h-2.5a.75.75 0 0 1-.75-.75M5.843 4.568a8.707 8.707 0 0 1 12.314 12.314l-1.187 1.174q-1.312 1.287-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.49-3.396q-.66-.646-1.103-1.09a8.707 8.707 0 0 1 0-12.314m11.254 1.06A7.207 7.207 0 1 0 6.904 15.822L8.39 17.29q1.228 1.201 3.088 3a.75.75 0 0 0 1.043 0l3.395-3.3q.703-.691 1.18-1.168a7.207 7.207 0 0 0 0-10.192");
}
</style><path class="neta7r8vp"/>`,
		"fallback": "fluent:location-add-24-regular",
	});
}

export default Component;
