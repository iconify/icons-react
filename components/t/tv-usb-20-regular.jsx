import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wiaczacrb {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.268A2 2 0 0 0 17 7V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8v.179a2 2 0 0 0 .176.821H4a2 2 0 0 1-2-2zm11.5 10.915L12.845 16H5.5a.5.5 0 0 0 0 1h8zM14 9v2a1 1 0 0 0-1 1v2.179a1 1 0 0 0 .187.582l1.313 1.833V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.406l1.309-1.8a1 1 0 0 0 .191-.588V12a1 1 0 0 0-1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m3 2h-2V9h2z");
}
</style><path class="wiaczacrb"/>`,
		"fallback": "fluent:tv-usb-20-regular",
	});
}

export default Component;
