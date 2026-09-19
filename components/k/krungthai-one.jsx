import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.othhkgbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.726 37.33c-1.658.518-3.42.797-5.249.797c-9.706 0-17.574-7.868-17.574-17.575S12.77 2.977 22.477 2.977C34.087 2.977 43.5 12.39 43.5 24s-9.412 21.023-21.023 21.023c-6.982 0-14.154-3.404-17.977-8.643");
}
</style><path class="othhkgbzg"/>`,
		"fallback": "arcticons:krungthai-one",
	});
}

export default Component;
