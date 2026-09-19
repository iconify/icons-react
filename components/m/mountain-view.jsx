import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l03ivrben.css';
import '../../css/w/wlmt3rjgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l03ivrben"/><path class="wlmt3rjgk"/>`,
		"fallback": "boxicons:mountain-view",
	});
}

export default Component;
