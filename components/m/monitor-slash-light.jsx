import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyzxg9-uh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyzxg9-uh"/>`,
		"fallback": "pullo:monitor-slash-light",
	});
}

export default Component;
