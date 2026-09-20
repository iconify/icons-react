import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ub9vppcpj.css';
import '../../css/f/f89knxb0k.css';
import '../../css/m/mitgmcb9w.css';
import '../../css/y/yy4nwtbvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ub9vppcpj"/><path class="f89knxb0k"/><path class="mitgmcb9w"/><path class="yy4nwtbvd"/></g>`,
		"fallback": "streamline-plump-color:ringing-bell-notification",
	});
}

export default Component;
