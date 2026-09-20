import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zctq2zbbr.css';
import '../../css/z/zoj-nnnyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zctq2zbbr"/><path class="zoj-nnnyg"/>`,
		"fallback": "token:mntl",
	});
}

export default Component;
