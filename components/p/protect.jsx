import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae3981pxw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae3981pxw"/>`,
		"fallback": "picon:protect",
	});
}

export default Component;
