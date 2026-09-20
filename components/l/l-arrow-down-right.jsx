import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l8p9sw6ku.css';
import '../../css/n/nawdfzb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l8p9sw6ku"/><path class="nawdfzb3b"/></g>`,
		"fallback": "mage:l-arrow-down-right",
	});
}

export default Component;
