import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/z/zup7-ab-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yzqd_nbaw"/><path class="zup7-ab-f"/></g>`,
		"fallback": "iconamoon:number-0-square-light",
	});
}

export default Component;
