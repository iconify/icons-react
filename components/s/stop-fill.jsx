import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o63iw0b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o63iw0b3l"/>`,
		"fallback": "akar-icons:stop-fill",
	});
}

export default Component;
