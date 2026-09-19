import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw26yhbkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw26yhbkm"/>`,
		"fallback": "ion:logo-google-playstore-outline",
	});
}

export default Component;
