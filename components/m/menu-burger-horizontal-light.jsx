import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfx5qrwbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfx5qrwbw"/>`,
		"fallback": "iconamoon:menu-burger-horizontal-light",
	});
}

export default Component;
