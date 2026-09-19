import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf8ifdctz.css';

const viewBox = {"width":1760,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf8ifdctz"/>`,
		"fallback": "fa:legal",
	});
}

export default Component;
