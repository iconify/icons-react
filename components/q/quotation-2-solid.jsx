import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdqn2oxjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rdqn2oxjc"/>`,
		"fallback": "streamline:quotation-2-solid",
	});
}

export default Component;
