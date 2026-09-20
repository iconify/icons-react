import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaw9vtb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaw9vtb3r"/>`,
		"fallback": "material-icon-theme:template",
	});
}

export default Component;
