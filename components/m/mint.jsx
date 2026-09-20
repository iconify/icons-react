import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw2qxfbii.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw2qxfbii"/>`,
		"fallback": "material-icon-theme:mint",
	});
}

export default Component;
