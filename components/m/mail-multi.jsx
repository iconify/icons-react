import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7gw2sb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7gw2sb4p"/>`,
		"fallback": "humbleicons:mail-multi",
	});
}

export default Component;
