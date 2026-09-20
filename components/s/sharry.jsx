import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1xjffa7d.css';
import '../../css/c/ccbxw8b-g.css';
import '../../css/d/dq4s8_baf.css';
import '../../css/z/zqx0zmbos.css';
import '../../css/y/ychnm4ptg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1xjffa7d"/><path class="ccbxw8b-g"/><path class="dq4s8_baf"/><path class="zqx0zmbos"/><path class="ychnm4ptg"/>`,
		"fallback": "selfhst:sharry",
	});
}

export default Component;
