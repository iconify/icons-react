import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sc7llmbau.css';
import '../../css/q/qqla5kiga.css';
import '../../css/g/ggxjm7kih.css';
import '../../css/v/vxpb2ab3q.css';
import '../../css/a/ay3no6bba.css';
import '../../css/f/ff_7sy2mn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="sc7llmbau"/><path class="qqla5kiga"/><path class="ggxjm7kih"/><path class="vxpb2ab3q"/><path class="ay3no6bba"/><path class="ff_7sy2mn"/></g>`,
		"fallback": "catppuccin:rsml",
	});
}

export default Component;
