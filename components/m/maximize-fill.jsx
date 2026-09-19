import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo_o_wwux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo_o_wwux"/>`,
		"fallback": "eva:maximize-fill",
	});
}

export default Component;
