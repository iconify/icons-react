import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u47j3lbwn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u47j3lbwn"/>`,
		"fallback": "streamline:mouth-lip-solid",
	});
}

export default Component;
