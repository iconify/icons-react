import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j697w45kf.css';
import '../../css/y/ykbn6bzmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="j697w45kf"/><path class="ykbn6bzmo"/></g>`,
		"fallback": "streamline-plump-color:phone",
	});
}

export default Component;
