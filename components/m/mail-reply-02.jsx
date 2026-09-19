import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfzeo_bdy.css';
import '../../css/x/xpcktbcyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gfzeo_bdy"/><path class="xpcktbcyt"/></g>`,
		"fallback": "hugeicons:mail-reply-02",
	});
}

export default Component;
