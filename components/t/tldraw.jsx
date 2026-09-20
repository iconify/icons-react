import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htp7298xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htp7298xj"/>`,
		"fallback": "material-icon-theme:tldraw",
	});
}

export default Component;
