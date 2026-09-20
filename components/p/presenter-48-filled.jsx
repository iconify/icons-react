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
		"content": `<style>.xlcyhz89f {
  fill: currentColor;
  d: path("M40.75 23a1.25 1.25 0 0 1 .883 2.134L31 35.768v3.982A4.25 4.25 0 0 1 26.75 44h-5.5A4.25 4.25 0 0 1 17 39.75v-3.982L6.366 25.134A1.25 1.25 0 0 1 7.25 23zm-13.5-7a4.25 4.25 0 0 1 4.25 4.25V21h-15v-.75A4.25 4.25 0 0 1 20.75 16zM24 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10");
}
</style><path class="xlcyhz89f"/>`,
		"fallback": "fluent:presenter-48-filled",
	});
}

export default Component;
