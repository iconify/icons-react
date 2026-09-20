import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffkvz2bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffkvz2bgj"/>`,
		"fallback": "streamline-freehand:shopping-bag-side",
	});
}

export default Component;
