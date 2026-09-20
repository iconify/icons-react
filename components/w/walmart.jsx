import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfiq4lbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfiq4lbxx"/>`,
		"fallback": "simple-icons:walmart",
	});
}

export default Component;
