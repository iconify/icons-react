import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qty0avndc.css';
import '../../css/n/nor7w30gi.css';
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
		"content": `<g class="hntgybcog"><path class="qty0avndc"/><path class="nor7w30gi"/><path class="oj8w4xbvf"/><path class="aeq8lyaql"/></g>`,
		"fallback": "reicon:wallet-add3-filled",
	});
}

export default Component;
