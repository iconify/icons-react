import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nibvr2bvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nibvr2bvb"/>`,
		"fallback": "noviair:sd-card-x",
	});
}

export default Component;
