import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdmtibc3m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdmtibc3m"/>`,
		"fallback": "f7:square-split-1x2-fill",
	});
}

export default Component;
