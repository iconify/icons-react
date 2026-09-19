import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh2817vyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh2817vyf"/>`,
		"fallback": "hugeicons:washington-monument",
	});
}

export default Component;
