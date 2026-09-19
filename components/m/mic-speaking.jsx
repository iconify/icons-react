import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ci27cabli.css';
import '../../css/j/jh7sodbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="ci27cabli"/><path class="jh7sodbdb"/></g>`,
		"fallback": "iconoir:mic-speaking",
	});
}

export default Component;
