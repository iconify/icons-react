import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gk766f02p.css';
import '../../css/i/iiqjf0biu.css';
import '../../css/o/ow6so4b7g.css';
import '../../css/n/n0y5vbbau.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gk766f02p"/><path class="iiqjf0biu"/><path class="ow6so4b7g"/><path class="n0y5vbbau"/></g>`,
		"fallback": "streamline-plump-color:like-1",
	});
}

export default Component;
