import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmuzp3bgs.css';
import '../../css/j/j52af2bgq.css';
import '../../css/x/x0h01vbne.css';
import '../../css/m/mh8jnrb6c.css';
import '../../css/n/ntz8sn7ri.css';
import '../../css/h/h2viwbc1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xmuzp3bgs"/><path class="j52af2bgq"/><path class="x0h01vbne"/><path class="mh8jnrb6c"/><path class="ntz8sn7ri"/><path class="h2viwbc1k"/></g>`,
		"fallback": "streamline-ultimate-color:shield-monitor",
	});
}

export default Component;
