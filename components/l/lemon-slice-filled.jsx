import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqe58787v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqe58787v"/>`,
		"fallback": "tdesign:lemon-slice-filled",
	});
}

export default Component;
