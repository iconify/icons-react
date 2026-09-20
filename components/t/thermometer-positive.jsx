import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/ciaqjn8ce.css';
import '../../css/c/c53bwmbsn.css';
import '../../css/x/xvr8s7biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ciaqjn8ce"/><path class="c53bwmbsn"/><path class="xvr8s7biw"/></g>`,
		"fallback": "streamline-sharp-color:thermometer-positive",
	});
}

export default Component;
