import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq-5i-b9s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq-5i-b9s"/>`,
		"fallback": "whh:off",
	});
}

export default Component;
