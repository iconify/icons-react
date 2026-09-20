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
		"content": `<style>.zlph2zydo {
  fill: currentColor;
  d: path("M15.577 20H4V4h16v11.577zM15 19l4-4h-4zm-3.5-3.5h1v-6h3v-1h-7v1h3z");
}
</style><path class="zlph2zydo"/>`,
		"fallback": "material-symbols-light:sticky-note-sharp",
	});
}

export default Component;
