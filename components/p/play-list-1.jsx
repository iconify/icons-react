import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/s/syp7_ufmy.css';
import '../../css/k/kjxsrjlhw.css';
import '../../css/u/u_dlxcmla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="syp7_ufmy"/><path class="kjxsrjlhw"/><path class="u_dlxcmla"/></g>`,
		"fallback": "streamline-plump-color:play-list-1",
	});
}

export default Component;
