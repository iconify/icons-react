import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfg_0dbhq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfg_0dbhq"/>`,
		"fallback": "material-icon-theme:jinja-light",
	});
}

export default Component;
