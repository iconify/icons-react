import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huersmbrs.css';
import '../../css/y/ydb89tdze.css';
import '../../css/c/cw9woomrs.css';
import '../../css/r/rx31uvbxr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huersmbrs"/><path class="ydb89tdze"/><path class="cw9woomrs"/><path class="rx31uvbxr"/>`,
		"fallback": "energy-icons:snowflake-20-bold",
	});
}

export default Component;
