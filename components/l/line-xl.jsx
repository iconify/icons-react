import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akp48p50j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akp48p50j"/>`,
		"fallback": "ci:line-xl",
	});
}

export default Component;
