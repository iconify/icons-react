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
		"content": `<style>.f6-20jbxo {
  fill: currentColor;
  d: path("m10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0m-1.05 8.6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M16.5 18c-.28 0-.5-.22-.5-.5v-1H8v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5s.5.22.5.5v4h3.5v-3c0-.28.22-.5.5-.5h3c1.1 0 2 .9 2 2v3.5c0 .28-.22.5-.5.5");
}
</style><path class="f6-20jbxo"/>`,
		"fallback": "ic:round-night-shelter",
	});
}

export default Component;
