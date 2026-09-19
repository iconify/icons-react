import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml5jf-drw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml5jf-drw"/>`,
		"fallback": "boxicons:lasso-filled",
	});
}

export default Component;
