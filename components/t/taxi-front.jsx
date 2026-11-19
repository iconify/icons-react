import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuch9bb4j.css';
import '../../css/x/xx8oo4bdw.css';
import '../../css/h/hcs1u7pih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yuch9bb4j"/><path class="xx8oo4bdw"/><path class="hcs1u7pih"/></g>`,
		"fallback": "andrsrxn:taxi-front",
	});
}

export default Component;
