import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/u/ufpt_9jsx.css';
import '../../css/m/m_rbx5bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="ufpt_9jsx"/><path class="m_rbx5bxo"/></g>`,
		"fallback": "tdesign:thunder",
	});
}

export default Component;
