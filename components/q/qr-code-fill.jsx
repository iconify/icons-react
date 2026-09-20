import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn4zp1bkf.css';
import '../../css/a/anndn7kya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn4zp1bkf"/><path class="anndn7kya"/>`,
		"fallback": "mage:qr-code-fill",
	});
}

export default Component;
