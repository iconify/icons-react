import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ozix77-sy.css';
import '../../css/j/jtte_yb-i.css';
import '../../css/c/cat56tugw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ozix77-sy"/><path class="jtte_yb-i"/><path class="cat56tugw"/></g>`,
		"fallback": "keyline-icons:panel-bottom-close-dashed-sharp-two-tone",
	});
}

export default Component;
