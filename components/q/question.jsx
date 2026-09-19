import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvj5wkbdh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvj5wkbdh"/>`,
		"fallback": "f7:question",
	});
}

export default Component;
