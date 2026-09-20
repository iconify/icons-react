import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb7y2j2ac.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zb7y2j2ac"/>`,
		"fallback": "streamline-flex:repeat-single-remix",
	});
}

export default Component;
