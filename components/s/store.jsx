import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/tgv1dsb4s.css';
import '../../css/c/c2_1yk01e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="tgv1dsb4s"/><path class="c2_1yk01e"/></g>`,
		"fallback": "iconamoon:store",
	});
}

export default Component;
