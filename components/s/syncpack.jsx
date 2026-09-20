import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8gytzbiv.css';
import '../../css/n/nigc12pwn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8gytzbiv"/><path class="nigc12pwn"/>`,
		"fallback": "material-icon-theme:syncpack",
	});
}

export default Component;
