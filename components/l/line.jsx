import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sypwx4bcq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sypwx4bcq"/>`,
		"fallback": "whh:line",
	});
}

export default Component;
