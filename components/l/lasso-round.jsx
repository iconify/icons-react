import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmtd3vrky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmtd3vrky"/>`,
		"fallback": "coolicons:lasso-round",
	});
}

export default Component;
