import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3c-h0b4m.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3c-h0b4m"/>`,
		"fallback": "whh:pigpeni",
	});
}

export default Component;
