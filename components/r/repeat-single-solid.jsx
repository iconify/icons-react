import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy2evxbof.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sy2evxbof"/>`,
		"fallback": "streamline-flex:repeat-single-solid",
	});
}

export default Component;
