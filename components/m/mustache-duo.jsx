import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prid3u2wn.css';
import '../../css/w/wcr5_ubdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prid3u2wn secondary"/><path class="primary wcr5_ubdi"/>`,
		"fallback": "iconaut:mustache-duo",
	});
}

export default Component;
