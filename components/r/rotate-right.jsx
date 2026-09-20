import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/d/d82tadb4s.css';
import '../../css/t/t_wbmxjju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="d82tadb4s"/><path class="t_wbmxjju"/></g>`,
		"fallback": "streamline-cyber-color:rotate-right",
	});
}

export default Component;
