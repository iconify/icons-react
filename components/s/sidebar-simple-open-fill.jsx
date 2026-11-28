import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx_bfl8jf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx_bfl8jf"/>`,
		"fallback": "pullo:sidebar-simple-open-fill",
	});
}

export default Component;
