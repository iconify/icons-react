import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co08zrbtn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co08zrbtn"/>`,
		"fallback": "f7:square",
	});
}

export default Component;
