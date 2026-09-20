import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yuypcbbho.css';
import '../../css/d/dr_m_fb8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="yuypcbbho"/><path class="dr_m_fb8a"/></g>`,
		"fallback": "streamline-plump:paint-bucket",
	});
}

export default Component;
