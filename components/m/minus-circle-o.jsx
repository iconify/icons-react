import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abq_w4bbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abq_w4bbo"/>`,
		"fallback": "uiw:minus-circle-o",
	});
}

export default Component;
