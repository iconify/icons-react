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
		"content": `<style>.jib4clces {
  fill: currentColor;
  d: path("M19.749 4a2.25 2.25 0 0 1 2.25 2.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4zm-4 5H8l-.176.005a3 3 0 1 0 2.877 1.689L10.6 10.5h2.8a3 3 0 1 0 2.775-1.495L16 9l-.17.004zM8 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m8 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="jib4clces"/>`,
		"fallback": "fluent:voicemail-24-filled",
	});
}

export default Component;
