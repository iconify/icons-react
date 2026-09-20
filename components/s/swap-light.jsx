import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sxl4mbrua {
  fill: currentColor;
  d: path("M222 48v104a14 14 0 0 1-14 14H94.49l13.75 13.76a6 6 0 1 1-8.48 8.48l-24-24a6 6 0 0 1 0-8.48l24-24a6 6 0 0 1 8.48 8.48L94.49 154H208a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0v-8a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14m-54 146a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V104a2 2 0 0 1 2-2h113.51l-13.75 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L161.51 90H48a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6");
}
</style><path class="sxl4mbrua"/>`,
		"fallback": "ph:swap-light",
	});
}

export default Component;
