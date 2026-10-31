import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjm-jcbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjm-jcbxz"/>`,
		"fallback": "coolicons:lasso-fill-round",
	});
}

export default Component;
