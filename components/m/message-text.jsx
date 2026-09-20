import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-3_bibib.css';
import '../../css/n/nipunhy-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z-3_bibib"/><path class="nipunhy-f"/></g>`,
		"fallback": "reicon:message-text",
	});
}

export default Component;
