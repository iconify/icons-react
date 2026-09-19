import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nj1tek_eb.css';
import '../../css/z/z2o0ujiuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="nj1tek_eb"/><circle class="z2o0ujiuj"/></g>`,
		"fallback": "iconamoon:profile",
	});
}

export default Component;
