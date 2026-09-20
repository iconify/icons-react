import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afxuf779n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afxuf779n"/>`,
		"fallback": "oi:pulse",
	});
}

export default Component;
