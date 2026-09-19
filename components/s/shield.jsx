import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah9l-qm1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah9l-qm1b"/>`,
		"fallback": "feather:shield",
	});
}

export default Component;
