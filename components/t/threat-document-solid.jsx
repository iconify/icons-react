import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn6f7hbhs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zn6f7hbhs"/>`,
		"fallback": "streamline:threat-document-solid",
	});
}

export default Component;
