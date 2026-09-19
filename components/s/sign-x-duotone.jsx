import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-nzex--m.css';
import '../../css/l/lxh66fbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-nzex--m"/><path class="lxh66fbrh"/></g>`,
		"fallback": "iconamoon:sign-x-duotone",
	});
}

export default Component;
