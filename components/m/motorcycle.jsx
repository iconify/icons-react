import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spev02xtm.css';
import '../../css/q/qw3cslx4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="spev02xtm"/><path class="qw3cslx4k wm-a"/></g>`,
		"fallback": "withicons:motorcycle",
	});
}

export default Component;
