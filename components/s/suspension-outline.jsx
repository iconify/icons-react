import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp28bbubj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zp28bbubj"/>`,
		"fallback": "solar:suspension-outline",
	});
}

export default Component;
