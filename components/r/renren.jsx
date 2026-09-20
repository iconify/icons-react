import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgd2rnb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgd2rnb0e"/>`,
		"fallback": "simple-icons:renren",
	});
}

export default Component;
