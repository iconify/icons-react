import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxds1i0dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxds1i0dj"/>`,
		"fallback": "token:mchc",
	});
}

export default Component;
