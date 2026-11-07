import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xn1ws9izf.css';
import '../../css/h/hd0g4bprt.css';
import '../../css/w/wp-m07q5u.css';
import '../../css/k/ksu-vpaob.css';
import '../../css/w/w3u7-asfg.css';
import '../../css/y/ygq6gxfeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="xn1ws9izf"/><path class="hd0g4bprt"/></g><path class="wp-m07q5u"/><path clip-rule="evenodd" class="ksu-vpaob"/><path class="w3u7-asfg"/><path class="ygq6gxfeg"/>`,
		"fallback": "solar:tornado-small-bold-duotone",
	});
}

export default Component;
