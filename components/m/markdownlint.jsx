import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc_3xnmin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc_3xnmin"/>`,
		"fallback": "material-icon-theme:markdownlint",
	});
}

export default Component;
