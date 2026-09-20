import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whl_gzbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whl_gzbab"/>`,
		"fallback": "streamline-logos:spinrilla-logo-block",
	});
}

export default Component;
