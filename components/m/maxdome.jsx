import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o474hqb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o474hqb2n"/>`,
		"fallback": "cbi:maxdome",
	});
}

export default Component;
