import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puno4n5gf.css';
import '../../css/u/ufakx9rlh.css';

const viewBox = {"width":511.875,"height":511.824};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puno4n5gf"/><path class="ufakx9rlh"/>`,
		"fallback": "material-icon-theme:racket",
	});
}

export default Component;
