import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkmclvb3d.css';
import '../../css/a/acxt2achp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkmclvb3d"/><path class="acxt2achp"/>`,
		"fallback": "pixel:product-management",
	});
}

export default Component;
