import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywx6ye69t.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywx6ye69t"/>`,
		"fallback": "wi:owm-905",
	});
}

export default Component;
