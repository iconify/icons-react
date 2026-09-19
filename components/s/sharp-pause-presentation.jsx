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
		"content": `<style>.rf0ju4blx {
  fill: currentColor;
  d: path("M1 3v18h22V3zm20 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z");
}
</style><path class="rf0ju4blx"/>`,
		"fallback": "ic:sharp-pause-presentation",
	});
}

export default Component;
