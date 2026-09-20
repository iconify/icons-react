import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur-d651vm.css';
import '../../css/n/nzbz80bhw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur-d651vm"/><path class="nzbz80bhw"/>`,
		"fallback": "thesvg-color:monero",
	});
}

export default Component;
