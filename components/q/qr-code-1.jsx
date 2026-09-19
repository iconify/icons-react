import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd7yc1ibt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd7yc1ibt"/>`,
		"fallback": "ci:qr-code-1",
	});
}

export default Component;
