import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juwz0acin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juwz0acin"/>`,
		"fallback": "material-icon-theme:silverstripe",
	});
}

export default Component;
