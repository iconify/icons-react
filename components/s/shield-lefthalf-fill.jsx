import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-4xc8ofo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-4xc8ofo"/>`,
		"fallback": "f7:shield-lefthalf-fill",
	});
}

export default Component;
