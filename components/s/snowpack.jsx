import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-7q2l6ez.css';

const viewBox = {"width":700,"height":700,"left":-30,"top":-94};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-7q2l6ez"/>`,
		"fallback": "material-icon-theme:snowpack",
	});
}

export default Component;
