import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.htmox4b0c {
  fill: currentColor;
  d: path("M5.004 9.75A3.75 3.75 0 0 1 8.754 6h7.5a3.75 3.75 0 0 1 3.718 3.262l2.933-1.93c1.33-.874 3.1.08 3.1 1.671v7.993c0 1.592-1.77 2.546-3.1 1.671l-2.933-1.93A3.75 3.75 0 0 1 16.255 20h-7.5a3.75 3.75 0 0 1-3.75-3.75zm15 5.213l3.726 2.451a.5.5 0 0 0 .774-.418V9.003a.5.5 0 0 0-.774-.417l-3.726 2.45zM8.754 7.5a2.25 2.25 0 0 0-2.25 2.25v6.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-6.5a2.25 2.25 0 0 0-2.25-2.25zM2.5 12.25c0-1.229.59-2.32 1.504-3.003v2.87L4 12.25v4A4.75 4.75 0 0 0 8.75 21h7.504q.262 0 .517-.028A3.75 3.75 0 0 1 13.75 22.5h-5a6.25 6.25 0 0 1-6.25-6.25z");
}
</style><path class="htmox4b0c"/>`,
		"fallback": "fluent:video-multiple-28-regular",
	});
}

export default Component;
