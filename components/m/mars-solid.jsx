import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdc-lubcl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdc-lubcl"/>`,
		"fallback": "la:mars-solid",
	});
}

export default Component;
