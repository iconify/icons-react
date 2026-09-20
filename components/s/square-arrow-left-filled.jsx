import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc3v66bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jc3v66bla"/>`,
		"fallback": "reicon:square-arrow-left-filled",
	});
}

export default Component;
