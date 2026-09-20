import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp_qx42gu.css';
import '../../css/u/u-xzs4btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp_qx42gu"/><path class="u-xzs4btq"/>`,
		"fallback": "streamline-ultimate:products-gifts-bold",
	});
}

export default Component;
