import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq1jeab-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq1jeab-v"/>`,
		"fallback": "noviair-light:syringe-check",
	});
}

export default Component;
