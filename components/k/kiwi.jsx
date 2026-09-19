import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-m70vbne.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-m70vbne"/>`,
		"fallback": "whh:kiwi",
	});
}

export default Component;
