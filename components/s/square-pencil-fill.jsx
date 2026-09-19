import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymhzve50f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymhzve50f"/>`,
		"fallback": "f7:square-pencil-fill",
	});
}

export default Component;
