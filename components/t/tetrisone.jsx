import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc8va39jk.css';

const viewBox = {"width":704,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc8va39jk"/>`,
		"fallback": "whh:tetrisone",
	});
}

export default Component;
