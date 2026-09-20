import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca9dfeugk.css';
import '../../css/r/rg1a49h5j.css';
import '../../css/s/scvi-omos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca9dfeugk"/><path class="rg1a49h5j"/><path class="scvi-omos"/>`,
		"fallback": "token:ubiq",
	});
}

export default Component;
