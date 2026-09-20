import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cui0wbciz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cui0wbciz"/>`,
		"fallback": "streamline-freehand:paragraphs-indent-left",
	});
}

export default Component;
