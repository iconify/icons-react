import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crv-b5b4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crv-b5b4n"/>`,
		"fallback": "icons8:resize-vertical",
	});
}

export default Component;
