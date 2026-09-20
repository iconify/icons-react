import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp7c32rjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp7c32rjk"/>`,
		"fallback": "tdesign:logo-cnb-filled",
	});
}

export default Component;
