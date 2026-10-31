import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g5al7-doa.css';
import '../../css/o/o4z97wbok.css';
import '../../css/d/dlwqyybda.css';
import '../../css/b/bu6t2sb4u.css';
import '../../css/t/tyl_u5bcc.css';
import '../../css/g/g8-s6bw7v.css';
import '../../css/z/zmht3bccz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g5al7-doa"/><path class="o4z97wbok"/><path class="dlwqyybda wm-shine"/><path class="bu6t2sb4u wm-k"/><path class="tyl_u5bcc wm-a"/><path class="g8-s6bw7v"/><path class="zmht3bccz"/></g>`,
		"fallback": "withicons-kawaii:popcorn",
	});
}

export default Component;
