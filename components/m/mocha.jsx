import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsexmdkfd.css';
import '../../css/w/w25867bho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsexmdkfd"/><path class="w25867bho"/>`,
		"fallback": "material-icon-theme:mocha",
	});
}

export default Component;
