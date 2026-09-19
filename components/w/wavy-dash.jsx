import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w_qrgnbqt {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M47 41c-5.6 0-10.1-4.2-10.1-9.4c0-2.5-2.2-4.5-4.9-4.5s-4.9 2-4.9 4.5c0 5.2-4.6 9.4-10.1 9.4S6.9 36.8 6.9 31.6c0-1.3-.6-2.5-1.6-3.3c-.9-.7-2-1.1-3.2-1.1V23c2.3 0 4.5.8 6.2 2.2c2 1.6 3.1 4 3.1 6.4c0 2.9 2.5 5.2 5.6 5.2s5.6-2.3 5.6-5.2c0-4.8 4.2-8.6 9.4-8.6s9.4 3.9 9.4 8.6c0 2.9 2.5 5.2 5.6 5.2s5.6-2.3 5.6-5.2c0-2.5 1.1-4.8 3.1-6.4c1.7-1.4 3.9-2.2 6.2-2.2v4.2c-1.2 0-2.3.4-3.2 1.1c-1 .9-1.6 2.1-1.6 3.3c0 5.2-4.5 9.4-10.1 9.4");
}
</style><path class="w_qrgnbqt"/>`,
		"fallback": "emojione:wavy-dash",
	});
}

export default Component;
