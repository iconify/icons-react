import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsczfvz-m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsczfvz-m"/>`,
		"fallback": "streamline:nurse-assistant-emergency",
	});
}

export default Component;
