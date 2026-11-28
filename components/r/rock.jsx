import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmp0z4btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmp0z4btx"/>`,
		"fallback": "noviair-light:rock",
	});
}

export default Component;
