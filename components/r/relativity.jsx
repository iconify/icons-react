import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/g/g89jmbe4t.css';
import '../../css/s/snll855pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="g89jmbe4t"/><path class="snll855pf"/></g>`,
		"fallback": "tdesign:relativity",
	});
}

export default Component;
