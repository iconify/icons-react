import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nakc4kdbz.css';
import '../../css/w/wglt58box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nakc4kdbz"/><path class="wglt58box"/>`,
		"fallback": "eva:toggle-left-outline",
	});
}

export default Component;
