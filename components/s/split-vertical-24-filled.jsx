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
		"content": `<style>.kmwfz9vpl {
  fill: currentColor;
  d: path("M12.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zM2 6.25A2.25 2.25 0 0 1 4.25 4H10v16H4.25A2.25 2.25 0 0 1 2 17.75zM19.25 20H13.5V4h5.75a2.25 2.25 0 0 1 2.25 2.25v11.5A2.25 2.25 0 0 1 19.25 20");
}
</style><path class="kmwfz9vpl"/>`,
		"fallback": "fluent:split-vertical-24-filled",
	});
}

export default Component;
