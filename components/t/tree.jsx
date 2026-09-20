import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t44yfjbkd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t44yfjbkd"/>`,
		"fallback": "material-icon-theme:tree",
	});
}

export default Component;
