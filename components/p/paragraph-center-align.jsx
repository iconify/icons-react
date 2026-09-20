import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5pwaeu0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5pwaeu0p"/>`,
		"fallback": "streamline-ultimate:paragraph-center-align",
	});
}

export default Component;
