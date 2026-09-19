import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxsqt2g8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxsqt2g8m"/>`,
		"fallback": "akar-icons:toggle-on-fill",
	});
}

export default Component;
