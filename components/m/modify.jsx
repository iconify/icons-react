import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpwx8jvkg.css';
import '../../css/i/i--whmege.css';
import '../../css/y/ys0j4mbvg.css';
import '../../css/p/povs420wf.css';
import '../../css/q/qv3bytbet.css';
import '../../css/s/sovzkxbpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qpwx8jvkg"/><path class="i--whmege"/><rect transform="rotate(45 34.606 4.908)" class="ys0j4mbvg"/><circle class="povs420wf"/><circle class="qv3bytbet"/><circle class="sovzkxbpq"/></g>`,
		"fallback": "icon-park:modify",
	});
}

export default Component;
