import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbq5kebal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbq5kebal"/>`,
		"fallback": "mingcute:rotate-to-vertical-fill",
	});
}

export default Component;
