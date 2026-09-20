import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a446cjlod.css';
import '../../css/n/nxszfactq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="a446cjlod"/><path vector-effect="non-scaling-stroke" class="nxszfactq"/></g>`,
		"fallback": "wordpress:navigation-overlay",
	});
}

export default Component;
