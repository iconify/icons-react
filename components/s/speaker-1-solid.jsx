import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aodbzbc2y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aodbzbc2y"/>`,
		"fallback": "streamline:speaker-1-solid",
	});
}

export default Component;
