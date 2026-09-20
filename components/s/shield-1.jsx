import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ymx63dbjn.css';
import '../../css/n/nknv9dbkq.css';
import '../../css/i/iqhlhrb0p.css';
import '../../css/u/u-xzz3p8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ymx63dbjn"/><path class="nknv9dbkq"/><path class="iqhlhrb0p"/><path class="u-xzz3p8n"/></g>`,
		"fallback": "streamline-plump-color:shield-1",
	});
}

export default Component;
