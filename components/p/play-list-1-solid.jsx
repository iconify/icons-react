import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guqljlbye.css';
import '../../css/d/d5zekqbpn.css';
import '../../css/d/dt5btu-ha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guqljlbye"/><path clip-rule="evenodd" class="d5zekqbpn"/><path class="dt5btu-ha"/>`,
		"fallback": "streamline-plump:play-list-1-solid",
	});
}

export default Component;
