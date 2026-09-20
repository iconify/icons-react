import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq_u29btb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq_u29btb"/>`,
		"fallback": "temaki:power-la",
	});
}

export default Component;
