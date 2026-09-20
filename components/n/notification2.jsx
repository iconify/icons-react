import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a7t0-2pev.css';
import '../../css/e/e4gcy2bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a7t0-2pev"/><path class="e4gcy2bhv"/></g>`,
		"fallback": "reicon:notification2",
	});
}

export default Component;
