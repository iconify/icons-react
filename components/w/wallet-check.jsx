import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nxn4riv4n.css';
import '../../css/x/xtwadebck.css';
import '../../css/o/oj8w4xbvf.css';
import '../../css/a/aeq8lyaql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nxn4riv4n"/><path class="xtwadebck"/><path class="oj8w4xbvf"/><path class="aeq8lyaql"/></g>`,
		"fallback": "reicon:wallet-check",
	});
}

export default Component;
