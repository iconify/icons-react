import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/isztaoy2o.css';
import '../../css/b/ba2e80hku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="isztaoy2o"/><path class="ba2e80hku"/></g>`,
		"fallback": "hugeicons:snowflake",
	});
}

export default Component;
