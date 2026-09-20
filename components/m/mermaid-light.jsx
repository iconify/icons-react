import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp6fmllkn.css';

const viewBox = {"width":491,"height":491};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp6fmllkn"/>`,
		"fallback": "thesvg-color:mermaid-light",
	});
}

export default Component;
