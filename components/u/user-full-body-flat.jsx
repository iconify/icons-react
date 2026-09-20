import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9_kk0hyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9_kk0hyu"/>`,
		"fallback": "streamline-flex-color:user-full-body-flat",
	});
}

export default Component;
