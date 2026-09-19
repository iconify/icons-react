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
		"content": `<style>.g_cyzplpb {
  fill: currentColor;
  d: path("M2 22h20V2z");
}
</style><path class="g_cyzplpb"/>`,
		"fallback": "ic:twotone-signal-cellular-4-bar",
	});
}

export default Component;
