import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a2whkvbxs.css';
import '../../css/r/r_dstt7vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a2whkvbxs"/><path class="r_dstt7vl"/></g>`,
		"fallback": "keyline-icons:sliders-horizontal-sparkles-sharp",
	});
}

export default Component;
