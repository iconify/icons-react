import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xm3as_bdr.css';
import '../../css/g/gokw35m3p.css';
import '../../css/r/re9a3j93t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xm3as_bdr"/><path class="gokw35m3p"/><path class="re9a3j93t"/></g>`,
		"fallback": "hugeicons:screen-add-to-home",
	});
}

export default Component;
