import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ira7vdbxe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ira7vdbxe"/>`,
		"fallback": "streamline:slack-solid",
	});
}

export default Component;
