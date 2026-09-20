import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/u/ufpt_9jsx.css';
import '../../css/l/lxsk-fw5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="ufpt_9jsx"/><path class="lxsk-fw5w"/></g>`,
		"fallback": "tdesign:thunderstorm",
	});
}

export default Component;
