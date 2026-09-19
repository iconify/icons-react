import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww0e8n4yy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww0e8n4yy"/>`,
		"fallback": "devicon-plain:svelte",
	});
}

export default Component;
