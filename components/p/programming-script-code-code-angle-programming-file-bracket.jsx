import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4bhfjrqf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4bhfjrqf"/>`,
		"fallback": "streamline:programming-script-code-code-angle-programming-file-bracket",
	});
}

export default Component;
