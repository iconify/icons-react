import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr3ujtb4j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr3ujtb4j"/>`,
		"fallback": "pullo:monitor-slash-thin",
	});
}

export default Component;
