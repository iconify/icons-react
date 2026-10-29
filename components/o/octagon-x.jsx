import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r71h7kf-k.css';
import '../../css/v/vfjzb5bhq.css';
import '../../css/x/xify6xauu.css';
import '../../css/a/aa3ow6bki.css';
import '../../css/d/dp2p5wusx.css';
import '../../css/e/ekq5-4mjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r71h7kf-k wm-k"/><path class="vfjzb5bhq wm-k"/><path class="wm-k xify6xauu"/><path class="aa3ow6bki wm-k"/><path class="dp2p5wusx wm-shine"/><path class="ekq5-4mjo wm-a"/></g>`,
		"fallback": "withicons-anime:octagon-x",
	});
}

export default Component;
