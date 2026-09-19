import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxt1ofkec.css';

const viewBox = {"width":457,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxt1ofkec"/>`,
		"fallback": "ls:italic",
	});
}

export default Component;
