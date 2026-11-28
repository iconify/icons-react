import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aua6iln_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aua6iln_v"/>`,
		"fallback": "noviair:shield",
	});
}

export default Component;
