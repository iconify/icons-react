import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hc30vmbkh.css';
import '../../css/b/bleh8ybih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hc30vmbkh"/><path class="bleh8ybih"/></g>`,
		"fallback": "reicon:mask",
	});
}

export default Component;
