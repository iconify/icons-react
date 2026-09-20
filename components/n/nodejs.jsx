import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg3v7v9he.css';
import '../../css/q/qnmhn2udd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg3v7v9he"/><path class="qnmhn2udd"/>`,
		"fallback": "material-icon-theme:nodejs",
	});
}

export default Component;
