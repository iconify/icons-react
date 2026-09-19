import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crh2c0bao.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crh2c0bao"/>`,
		"fallback": "fa:repeat",
	});
}

export default Component;
