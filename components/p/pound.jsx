import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndub4cb4x.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndub4cb4x"/>`,
		"fallback": "whh:pound",
	});
}

export default Component;
