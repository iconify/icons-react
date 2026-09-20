import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9huq1jph.css';
import '../../css/a/auhfmn4jd.css';
import '../../css/x/xsr2o7bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m9huq1jph"/><path class="auhfmn4jd"/><path class="xsr2o7bxe"/></g>`,
		"fallback": "reicon:laptop4-duotone",
	});
}

export default Component;
