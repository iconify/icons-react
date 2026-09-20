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
		"content": `<style>.cbmyrbmfm {
  fill: currentColor;
  d: path("M4.5 20v-1h2V4h8v1h3v14h2v1h-3V6h-2v14zm3-15v14zm4.54 7.54q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23M7.5 19h6V5h-6z");
}
</style><path class="cbmyrbmfm"/>`,
		"fallback": "material-symbols-light:meeting-room-outline-sharp",
	});
}

export default Component;
