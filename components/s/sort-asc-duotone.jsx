import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1doryhmy.css';
import '../../css/l/lnsvjbcor.css';
import '../../css/d/dvsr5sbpc.css';
import '../../css/y/y2hkqbbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l1doryhmy"/><path class="lnsvjbcor"/><path class="dvsr5sbpc"/><path class="y2hkqbbkv"/></g>`,
		"fallback": "reicon:sort-asc-duotone",
	});
}

export default Component;
