import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akko4peii.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akko4peii"/>`,
		"fallback": "f7:square-fill-on-square-fill",
	});
}

export default Component;
