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
		"content": `<style>.q04ru-rxt {
  fill: currentColor;
  d: path("M7 11.5v-1h1v1ZM5.5 15H7v-2h2.5v-3l-1-1h-3Zm4.9 0h3l.1-1.5h-1.6v-1.6l-1.5-1.5ZM3 21V3.65l-.2-.85L21 21h-1.225Zm16.6 1.4L1.4 4.2l1.4-1.4L21 21ZM5.825 3H21v15.175l-4-4V13h1.5v-1.5H17v-1h1.5V9h-3v3.675l-1.1-1.1V10l-1-1h-1.575Z");
}
</style><path class="q04ru-rxt"/>`,
		"fallback": "material-symbols:pdf-off-sharp",
	});
}

export default Component;
