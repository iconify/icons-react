import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7t_cxwna.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7t_cxwna"/>`,
		"fallback": "material-icon-theme:vim",
	});
}

export default Component;
