import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjagxnurm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjagxnurm"/>`,
		"fallback": "noviair-light:soccer-ball-check",
	});
}

export default Component;
