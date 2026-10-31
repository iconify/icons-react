import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/w/w_kj_gbbv.css';
import '../../css/d/dk7h4tb6r.css';
import '../../css/q/q_6ulgjyk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="w_kj_gbbv"/><path class="dk7h4tb6r"/><path class="q_6ulgjyk"/></g>`,
		"fallback": "streamline-kameleon-color:pounds-coin-pop",
	});
}

export default Component;
