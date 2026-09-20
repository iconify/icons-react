import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvt9n_7pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvt9n_7pp"/>`,
		"fallback": "thesvg:sessionize",
	});
}

export default Component;
