import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhnry8e_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhnry8e_z"/>`,
		"fallback": "material-icon-theme:lottie",
	});
}

export default Component;
