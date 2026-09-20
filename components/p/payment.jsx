import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ixxfkht3v.css';
import '../../css/n/nohbm6p0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ixxfkht3v"/><path vector-effect="non-scaling-stroke" class="nohbm6p0a"/></g>`,
		"fallback": "wordpress:payment",
	});
}

export default Component;
