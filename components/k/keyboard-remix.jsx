import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkvn7i82x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zkvn7i82x"/>`,
		"fallback": "streamline:keyboard-remix",
	});
}

export default Component;
