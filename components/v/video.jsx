import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb1i4i28z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb1i4i28z"/>`,
		"fallback": "material-icon-theme:video",
	});
}

export default Component;
