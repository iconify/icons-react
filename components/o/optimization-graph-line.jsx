import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tb_dcdbox.css';
import '../../css/m/m_y1tbcpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tb_dcdbox"/><path class="m_y1tbcpi"/></g>`,
		"fallback": "streamline-ultimate:optimization-graph-line",
	});
}

export default Component;
