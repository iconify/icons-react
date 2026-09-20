import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/smxgbebke.css';
import '../../css/p/pl4wavb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="smxgbebke"/><path class="pl4wavb8s"/></g>`,
		"fallback": "reicon:save-remove",
	});
}

export default Component;
