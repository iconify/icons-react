import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_c_cc7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc_c_cc7j"/>`,
		"fallback": "simple-icons:paramountplus",
	});
}

export default Component;
