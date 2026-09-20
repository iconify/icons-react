import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etuvs-83s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etuvs-83s"/>`,
		"fallback": "streamline:interface-arrows-button-to-top-arrow-up-line-to-top",
	});
}

export default Component;
