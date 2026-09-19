import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c16rm2tya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c16rm2tya"/>`,
		"fallback": "icon-park:up-two",
	});
}

export default Component;
