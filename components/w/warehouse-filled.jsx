import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl2o4cc0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl2o4cc0r"/>`,
		"fallback": "boxicons:warehouse-filled",
	});
}

export default Component;
