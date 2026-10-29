import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r71h7kf-k.css';
import '../../css/w/w4xhal56m.css';
import '../../css/s/s5rvnzgxq.css';
import '../../css/a/aa3ow6bki.css';
import '../../css/d/dp2p5wusx.css';
import '../../css/r/ri487s-_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r71h7kf-k wm-k"/><path class="w4xhal56m wm-k"/><path class="s5rvnzgxq wm-k"/><path class="aa3ow6bki wm-k"/><path class="dp2p5wusx wm-shine"/><path class="ri487s-_a wm-a"/></g>`,
		"fallback": "withicons-anime:octagon-alert",
	});
}

export default Component;
