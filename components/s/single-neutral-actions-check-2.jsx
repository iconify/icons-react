import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w49p_-bhh.css';
import '../../css/n/ng-m_ujnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w49p_-bhh"/><path class="ng-m_ujnq"/></g>`,
		"fallback": "streamline-ultimate:single-neutral-actions-check-2",
	});
}

export default Component;
