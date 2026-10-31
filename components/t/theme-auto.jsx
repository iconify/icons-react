import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pmxzqzl_o.css';
import '../../css/k/ky36n5bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="pmxzqzl_o"/><path class="ky36n5bjf"/></g>`,
		"fallback": "struq:theme-auto",
	});
}

export default Component;
