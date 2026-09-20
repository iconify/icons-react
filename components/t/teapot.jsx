import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/me4z_8btf.css';
import '../../css/w/ww-154yyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="me4z_8btf"/><path class="ww-154yyb"/></g>`,
		"fallback": "tabler:teapot",
	});
}

export default Component;
