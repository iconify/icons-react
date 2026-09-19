import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nekr66b3e.css';

const viewBox = {"width":2048,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nekr66b3e"/>`,
		"fallback": "fa:sellsy",
	});
}

export default Component;
