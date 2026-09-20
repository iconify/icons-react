import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rrkjydeid.css';
import '../../css/c/clhe63_8r.css';
import '../../css/w/w2ixxib2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="rrkjydeid"/><path vector-effect="non-scaling-stroke" class="clhe63_8r"/><path vector-effect="non-scaling-stroke" class="w2ixxib2w"/></g>`,
		"fallback": "wordpress:tabs",
	});
}

export default Component;
