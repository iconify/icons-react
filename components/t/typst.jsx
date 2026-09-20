import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4apv2b9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4apv2b9j"/>`,
		"fallback": "material-icon-theme:typst",
	});
}

export default Component;
