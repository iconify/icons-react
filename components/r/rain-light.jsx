import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/u/ufpt_9jsx.css';
import '../../css/x/x_sh__boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="ufpt_9jsx"/><path class="x_sh__boy"/></g>`,
		"fallback": "tdesign:rain-light",
	});
}

export default Component;
