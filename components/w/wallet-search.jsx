import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/crmmipbgc.css';
import '../../css/g/g3wbqrbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="crmmipbgc"/><path class="g3wbqrbrs"/></g>`,
		"fallback": "reicon:wallet-search",
	});
}

export default Component;
