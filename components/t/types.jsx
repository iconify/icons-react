import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qughtqkib.css';
import '../../css/y/y0vpd67op.css';
import '../../css/z/zcfun48xi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qughtqkib"/><path class="y0vpd67op"/><path class="zcfun48xi"/>`,
		"fallback": "carbon:types",
	});
}

export default Component;
