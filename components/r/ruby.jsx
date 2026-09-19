import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz2t2e3bo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz2t2e3bo"/>`,
		"fallback": "whh:ruby",
	});
}

export default Component;
