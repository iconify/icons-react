import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbk9mqbbx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbk9mqbbx"/>`,
		"fallback": "pinhead:tired-face-in-circle",
	});
}

export default Component;
