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
		"content": `<style>.hv2jhxkpp {
  fill: currentColor;
  d: path("M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6zm-4 5v2h2v-2z");
}
</style><path class="hv2jhxkpp"/>`,
		"fallback": "ic:sharp-meeting-room",
	});
}

export default Component;
