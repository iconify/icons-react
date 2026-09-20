import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryq49vj0z.css';
import '../../css/i/iz9ll_bww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryq49vj0z"/><path class="iz9ll_bww"/>`,
		"fallback": "material-icon-theme:url",
	});
}

export default Component;
