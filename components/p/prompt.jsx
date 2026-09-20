import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baiiv2vew.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baiiv2vew"/>`,
		"fallback": "material-icon-theme:prompt",
	});
}

export default Component;
