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
		"content": `<style>.swibd0b5f {
  fill: currentColor;
  d: path("M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005zm-5.502 10.996H7.75l-.102.007a.75.75 0 0 0 0 1.487l.102.006h4.498l.102-.006a.75.75 0 0 0 0-1.487zM16.25 10h-8.5l-.102.006a.75.75 0 0 0 0 1.487l.102.007h8.5l.102-.007a.75.75 0 0 0 0-1.487zm0-2.999h-8.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.5l.102-.007a.75.75 0 0 0 0-1.486z");
}
</style><path class="swibd0b5f"/>`,
		"fallback": "fluent:reading-mode-mobile-24-filled",
	});
}

export default Component;
