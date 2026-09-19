import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8tlm64ui.css';

const viewBox = {"width":1792,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8tlm64ui"/>`,
		"fallback": "vs:sleep",
	});
}

export default Component;
