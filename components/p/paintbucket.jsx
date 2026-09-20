import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uw3p59wfk.css';
import '../../css/g/g-ognobex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uw3p59wfk"/><path class="g-ognobex"/></g>`,
		"fallback": "reicon:paintbucket",
	});
}

export default Component;
