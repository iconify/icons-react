import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/up950ccwj.css';
import '../../css/l/lf7_zrbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="up950ccwj"/><path class="lf7_zrbyj"/></g>`,
		"fallback": "coolicons:ungroup-duocolor-round",
	});
}

export default Component;
