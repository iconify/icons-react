import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5d9x7bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5d9x7bjf"/>`,
		"fallback": "simple-icons:itchdotio",
	});
}

export default Component;
