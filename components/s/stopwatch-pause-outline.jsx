import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7lkx0ogu.css';
import '../../css/y/yzk23xbkf.css';
import '../../css/x/xq5yyvbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h7lkx0ogu"/><path class="yzk23xbkf"/><path class="xq5yyvbkp"/></g>`,
		"fallback": "solar:stopwatch-pause-outline",
	});
}

export default Component;
