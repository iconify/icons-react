import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv49kkb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv49kkb0d"/>`,
		"fallback": "mdi:language-python-text",
	});
}

export default Component;
