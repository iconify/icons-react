import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zern9db0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zern9db0m"/>`,
		"fallback": "akar-icons:share-box",
	});
}

export default Component;
