import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoqlp549d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eoqlp549d"/>`,
		"fallback": "streamline-color:no-poverty-flat",
	});
}

export default Component;
