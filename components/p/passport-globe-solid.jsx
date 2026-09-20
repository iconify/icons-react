import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_hy8wbcu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_hy8wbcu"/>`,
		"fallback": "streamline-flex:passport-globe-solid",
	});
}

export default Component;
