import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l14-q-b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l14-q-b7l"/>`,
		"fallback": "boxicons:male",
	});
}

export default Component;
