import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x77--0btf.css';
import '../../css/p/pujum7bmy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x77--0btf"/><path clip-rule="evenodd" class="pujum7bmy"/></g>`,
		"fallback": "streamline-color:pathfinder-trim-flat",
	});
}

export default Component;
