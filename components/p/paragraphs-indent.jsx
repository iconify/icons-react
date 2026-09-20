import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er0e4cwyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="er0e4cwyf"/>`,
		"fallback": "streamline-freehand:paragraphs-indent",
	});
}

export default Component;
