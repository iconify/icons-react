import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v6pgpj07q {
  fill: currentColor;
  d: path("M8 5.5a3.5 3.5 0 0 1 6-2.45a3.5 3.5 0 0 1 6 2.45V8h2.5A1.5 1.5 0 0 1 24 9.5v4.365a7.5 7.5 0 0 0-1.5-.595V9.5h-5v4.124a7.5 7.5 0 0 0-1.5.875V9.5H5.5V22A2.5 2.5 0 0 0 8 24.5h6.154c.35.553.77 1.057 1.247 1.5H8a4 4 0 0 1-4-4V9.5A1.5 1.5 0 0 1 5.5 8H8zM18.5 8V5.5a2 2 0 0 0-3.674-1.094A3.5 3.5 0 0 1 15 5.5V8zm-5-2.5a2 2 0 1 0-4 0V8h4zm13.5 15a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708");
}
</style><path class="v6pgpj07q"/>`,
		"fallback": "fluent:shopping-bag-checkmark-28-regular",
	});
}

export default Component;
