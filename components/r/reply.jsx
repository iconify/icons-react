import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsjan4b5k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vsjan4b5k"/>`,
		"fallback": "heroicons-solid:reply",
	});
}

export default Component;
