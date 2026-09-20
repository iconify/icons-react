import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jdufm-bkt.css';
import '../../css/i/ine028bnv.css';
import '../../css/a/ancheq7bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jdufm-bkt"/><path class="ine028bnv"/><path class="ancheq7bz"/></g>`,
		"fallback": "reicon:user-speak-duotone",
	});
}

export default Component;
