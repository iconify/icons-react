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
		"content": `<style>.lbbik7byy {
  fill: currentColor;
  d: path("M11 6c0-1.265 1.076-2.164 2.298-2.167c.399-.001.793.092 1.149.273l4 2a1 1 0 1 1-.894 1.788l-4-2a.6.6 0 0 0-.251-.061c-.093 0-.302.044-.302.167v11a4.001 4.001 0 1 1-2-3.465Z");
}
</style><path class="lbbik7byy"/>`,
		"fallback": "coolicons:music-note-fill",
	});
}

export default Component;
