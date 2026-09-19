import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd2vlzvpe.css';

const viewBox = {"width":315,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd2vlzvpe"/>`,
		"fallback": "ls:volume",
	});
}

export default Component;
