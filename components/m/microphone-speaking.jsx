import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ci27cabli.css';
import '../../css/z/zbs268rel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="ci27cabli"/><path class="zbs268rel"/></g>`,
		"fallback": "iconoir:microphone-speaking",
	});
}

export default Component;
