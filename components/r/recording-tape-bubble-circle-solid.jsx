import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2_c2vsll.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g2_c2vsll"/>`,
		"fallback": "streamline-flex:recording-tape-bubble-circle-solid",
	});
}

export default Component;
