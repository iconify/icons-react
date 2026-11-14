import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sxe59obrt.css';
import '../../css/b/bl_p9-lpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sxe59obrt"/><path class="bl_p9-lpg"/></g>`,
		"fallback": "hugeicons:money-bag-02",
	});
}

export default Component;
