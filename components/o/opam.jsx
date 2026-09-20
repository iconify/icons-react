import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bung3jz0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bung3jz0d"/>`,
		"fallback": "material-icon-theme:opam",
	});
}

export default Component;
