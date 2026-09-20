import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haz-qe35l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haz-qe35l"/>`,
		"fallback": "uiw:uiw",
	});
}

export default Component;
