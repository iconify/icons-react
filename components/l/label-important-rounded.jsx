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
		"content": `<style>.rtgfgcttc {
  fill: currentColor;
  d: path("M15 20H4q-.625 0-.9-.55t.1-1.05L8 12L3.2 5.6q-.375-.5-.1-1.05T4 4h11q.475 0 .9.212t.7.588l4.5 6q.4.525.4 1.2t-.4 1.2l-4.5 6q-.275.375-.7.588T15 20");
}
</style><path class="rtgfgcttc"/>`,
		"fallback": "material-symbols:label-important-rounded",
	});
}

export default Component;
