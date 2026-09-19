import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1pa2zcme.css';
import '../../css/u/uwhgdo6-e.css';
import '../../css/j/jrw1kyc7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q1pa2zcme"/><path class="uwhgdo6-e"/><path class="jrw1kyc7b"/></g>`,
		"fallback": "griddy-icons:tumble-dryer",
	});
}

export default Component;
