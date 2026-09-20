import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvc2u1bgn.css';
import '../../css/w/wp1uefsie.css';
import '../../css/w/wmijqjbod.css';
import '../../css/z/zqn1mcbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvc2u1bgn"/><path class="wp1uefsie"/><path class="wmijqjbod"/><path class="zqn1mcbik"/></g>`,
		"fallback": "streamline-cyber-color:package-stack-2",
	});
}

export default Component;
