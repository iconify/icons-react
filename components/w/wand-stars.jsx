import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/redgfc8ck.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="redgfc8ck"/>`,
		"fallback": "f7:wand-stars",
	});
}

export default Component;
