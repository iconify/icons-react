import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pap4jeb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pap4jeb5k"/>`,
		"fallback": "material-icon-theme:slug",
	});
}

export default Component;
