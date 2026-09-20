import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xamdbob0v.css';
import '../../css/d/dkg5y-blo.css';
import '../../css/s/sfkdkpbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xamdbob0v"/><path class="dkg5y-blo"/><path clip-rule="evenodd" class="sfkdkpbkg"/></g>`,
		"fallback": "reicon:text-duotone",
	});
}

export default Component;
