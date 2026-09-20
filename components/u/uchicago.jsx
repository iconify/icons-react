import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc5o9yeae.css';

const viewBox = {"width":250,"height":62.734};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc5o9yeae"/>`,
		"fallback": "thesvg-color:uchicago",
	});
}

export default Component;
