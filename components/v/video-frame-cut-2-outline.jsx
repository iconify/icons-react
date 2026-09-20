import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1534b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py1534b9i"/>`,
		"fallback": "solar:video-frame-cut-2-outline",
	});
}

export default Component;
