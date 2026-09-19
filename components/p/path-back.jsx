import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0v8bqb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a0v8bqb1j"/>`,
		"fallback": "gg:path-back",
	});
}

export default Component;
