import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-4i5sbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-4i5sbuh"/>`,
		"fallback": "mingcute:rewind-backward-10-line",
	});
}

export default Component;
