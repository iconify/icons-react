import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jeoamabzd.css';
import '../../css/f/fng--lb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jeoamabzd"/><path class="fng--lb6x"/></g>`,
		"fallback": "hugeicons:more-vertical-circle-02",
	});
}

export default Component;
