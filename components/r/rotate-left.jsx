import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qm_8idbhr.css';
import '../../css/h/hsr7erqrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="qm_8idbhr"/><path vector-effect="non-scaling-stroke" class="hsr7erqrg"/></g>`,
		"fallback": "wordpress:rotate-left",
	});
}

export default Component;
