import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jf5cqsbal.css';
import '../../css/p/p-njb8bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jf5cqsbal"/><path class="p-njb8bcz"/></g>`,
		"fallback": "reicon:note3",
	});
}

export default Component;
