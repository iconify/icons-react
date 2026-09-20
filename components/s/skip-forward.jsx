import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u68xsebgv.css';
import '../../css/g/g9sjzb5qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="u68xsebgv"/><path vector-effect="non-scaling-stroke" class="g9sjzb5qk"/></g>`,
		"fallback": "wordpress:skip-forward",
	});
}

export default Component;
