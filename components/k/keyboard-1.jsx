import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw_nd3bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw_nd3bja"/>`,
		"fallback": "tdesign:keyboard-1",
	});
}

export default Component;
