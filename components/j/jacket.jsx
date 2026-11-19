import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/be2-xt8pu.css';
import '../../css/b/bvga37gwd.css';
import '../../css/c/cfzanbbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="be2-xt8pu"/><path class="bvga37gwd"/><path class="cfzanbbzs"/></g>`,
		"fallback": "lucide:jacket",
	});
}

export default Component;
