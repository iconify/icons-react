import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ls2l-iphu.css';
import '../../css/r/rvcd_fbtv.css';
import '../../css/z/zptexebry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ls2l-iphu"/><path class="rvcd_fbtv"/><path class="zptexebry"/></g>`,
		"fallback": "hugeicons:message-square-reply",
	});
}

export default Component;
