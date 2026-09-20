import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t2acyua3g {
  fill: currentColor;
  d: path("M2 9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z");
}
</style><path class="t2acyua3g"/>`,
		"fallback": "fluent:rectangle-portrait-12-filled",
	});
}

export default Component;
