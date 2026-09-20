import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xsa8rjksl.css';
import '../../css/a/a98c3lbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xsa8rjksl"/><path class="a98c3lbqv"/></g>`,
		"fallback": "keyline-icons:panel-right-open-dashed-sharp",
	});
}

export default Component;
