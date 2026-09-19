import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naj3l57bw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naj3l57bw"/>`,
		"fallback": "f7:shield-slash-fill",
	});
}

export default Component;
