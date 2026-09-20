import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iorohegil {
  fill: currentColor;
  d: path("M3.117 4.68a.5.5 0 0 1 .767.64L1.651 8l2.233 2.68a.5.5 0 0 1-.767.64l-2.5-3a.5.5 0 0 1 0-.64zm9.063-.064a.5.5 0 0 1 .704.064l2.5 3a.5.5 0 0 1 0 .64l-2.5 3a.5.5 0 0 1-.767-.64L14.35 8l-2.233-2.68a.5.5 0 0 1 .063-.704M11.125 7.13a.875.875 0 1 1 0 1.75a.875.875 0 0 1 0-1.75m-6.25-.005a.875.875 0 1 1 0 1.75a.875.875 0 0 1 0-1.75m3.125 0a.875.875 0 1 1 0 1.75a.875.875 0 0 1 0-1.75");
}
</style><path class="iorohegil"/>`,
		"fallback": "fluent:virtual-network-16-regular",
	});
}

export default Component;
