import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pp5jjeb7y.css';
import '../../css/s/s2e-iwdfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pp5jjeb7y"/><path class="s2e-iwdfj"/></g>`,
		"fallback": "reicon:receipt-search",
	});
}

export default Component;
