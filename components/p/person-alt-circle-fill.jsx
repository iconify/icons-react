import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-d_8ghxa.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-d_8ghxa"/>`,
		"fallback": "f7:person-alt-circle-fill",
	});
}

export default Component;
