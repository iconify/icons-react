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
		"content": `<style>.o028c4pxb {
  fill: currentColor;
  d: path("M19.5 20h-15q-.213 0-.357-.143T4 19.5t.143-.357T4.5 19h15q.214 0 .357.143T20 19.5t-.143.357T19.5 20M5.616 16.616q-.691 0-1.153-.463T4 15V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616V15q0 .69-.462 1.153t-1.153.463z");
}
</style><path class="o028c4pxb"/>`,
		"fallback": "material-symbols-light:page-footer-rounded",
	});
}

export default Component;
