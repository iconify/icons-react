import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/owzpiw7rd.css';
import '../../css/u/um3ym-bhg.css';
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
		"content": `<g class="hntgybcog"><path class="owzpiw7rd"/><path class="um3ym-bhg"/><path class="oj8w4xbvf"/><path class="aeq8lyaql"/></g>`,
		"fallback": "reicon:wallet-add",
	});
}

export default Component;
