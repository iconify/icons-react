import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps1rxzboz.css';
import '../../css/n/nug-zhhlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps1rxzboz"/><path class="nug-zhhlz"/>`,
		"fallback": "bx:qr-scan",
	});
}

export default Component;
