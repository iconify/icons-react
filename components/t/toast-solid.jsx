import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4m87fb-g.css';
import '../../css/v/vmlbxu0qg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4m87fb-g"/><path clip-rule="evenodd" class="vmlbxu0qg"/>`,
		"fallback": "streamline:toast-solid",
	});
}

export default Component;
