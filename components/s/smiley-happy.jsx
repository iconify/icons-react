import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/j/j3a1jccqb.css';
import '../../css/v/vxlksgvbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="j3a1jccqb"/><path class="vxlksgvbl"/></g>`,
		"fallback": "streamline-ultimate:smiley-happy",
	});
}

export default Component;
