import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swz-qybok.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swz-qybok"/>`,
		"fallback": "wi:moon-waning-crescent-3",
	});
}

export default Component;
