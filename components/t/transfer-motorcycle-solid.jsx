import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8co8ab3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8co8ab3y"/>`,
		"fallback": "streamline:transfer-motorcycle-solid",
	});
}

export default Component;
