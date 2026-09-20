import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyrdmhb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyrdmhb8p"/>`,
		"fallback": "si:sunny-snowing-fill",
	});
}

export default Component;
