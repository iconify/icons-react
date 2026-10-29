import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e06he2csl.css';
import '../../css/y/yrxkn9bpd.css';
import '../../css/k/kwaf2c8nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e06he2csl"/><path class="yrxkn9bpd"/><path class="kwaf2c8nv"/></g>`,
		"fallback": "withicons-bauhaus:projector",
	});
}

export default Component;
