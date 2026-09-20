import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etyfe9bzz.css';

const viewBox = {"width":700,"height":700,"left":-30,"top":-94};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etyfe9bzz"/>`,
		"fallback": "material-icon-theme:snowpack-light",
	});
}

export default Component;
