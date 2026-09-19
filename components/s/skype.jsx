import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_9rovs-k.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_9rovs-k"/>`,
		"fallback": "fa-brands:skype",
	});
}

export default Component;
