import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqxgtskzz.css';
import '../../css/s/sfy8kv3oc.css';
import '../../css/a/ar-q0y1tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqxgtskzz"/><path class="sfy8kv3oc"/><path class="ar-q0y1tq"/></g>`,
		"fallback": "streamline-ultimate-color:upload-brackets",
	});
}

export default Component;
