import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps-ijm78y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps-ijm78y"/>`,
		"fallback": "humbleicons:shield-off",
	});
}

export default Component;
