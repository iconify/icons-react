import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbxs4bbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbxs4bbew"/>`,
		"fallback": "noviair-light:pull-request-check",
	});
}

export default Component;
