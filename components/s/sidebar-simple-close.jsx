import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbi79f4ad.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbi79f4ad"/>`,
		"fallback": "pullo:sidebar-simple-close",
	});
}

export default Component;
