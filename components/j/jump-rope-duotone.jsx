import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le474ol3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le474ol3r primary"/>`,
		"fallback": "iconaut:jump-rope-duotone",
	});
}

export default Component;
