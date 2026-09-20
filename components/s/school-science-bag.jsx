import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_af56bqu.css';
import '../../css/q/qnb3e9bul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_af56bqu"/><path class="qnb3e9bul"/>`,
		"fallback": "streamline-pixel:school-science-bag",
	});
}

export default Component;
