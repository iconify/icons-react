import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd2v4sbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd2v4sbqi"/>`,
		"fallback": "streamline-ultimate:startup-product-rocket-box-bold",
	});
}

export default Component;
