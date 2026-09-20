import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yij8m4b-a.css';
import '../../css/h/hurilw_2h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yij8m4b-a"/><path class="hurilw_2h"/></g>`,
		"fallback": "streamline-plump-color:ok-hand",
	});
}

export default Component;
