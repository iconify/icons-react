import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sizjy_pxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sizjy_pxy"/>`,
		"fallback": "selfhst:versity",
	});
}

export default Component;
