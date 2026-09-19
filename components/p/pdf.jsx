import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmeluh7qo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmeluh7qo"/>`,
		"fallback": "icons8:pdf",
	});
}

export default Component;
