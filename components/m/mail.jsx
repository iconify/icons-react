import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj6h2wbzp.css';

const viewBox = {"width":768,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj6h2wbzp"/>`,
		"fallback": "ls:mail",
	});
}

export default Component;
