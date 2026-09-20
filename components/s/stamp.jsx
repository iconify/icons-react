import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mglmu62iw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mglmu62iw"/>`,
		"fallback": "picon:stamp",
	});
}

export default Component;
