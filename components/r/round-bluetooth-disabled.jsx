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
		"content": `<style>.ya6n9isto {
  fill: currentColor;
  d: path("M19.29 17.89L6.11 4.7A.996.996 0 1 0 4.7 6.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71l3.59-3.59l1.59 1.59c.39.39 1.02.39 1.41 0c.38-.39.38-1.03-.01-1.41m-6.29.28v-3.76l1.88 1.88zm0-12.34l1.88 1.88l-1.47 1.47l1.41 1.41L17 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v3.36l2 2z");
}
</style><path class="ya6n9isto"/>`,
		"fallback": "ic:round-bluetooth-disabled",
	});
}

export default Component;
