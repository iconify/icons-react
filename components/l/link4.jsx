import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j7h6hou_i.css';
import '../../css/m/m_mb5mu8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j7h6hou_i"/><path class="m_mb5mu8u"/></g>`,
		"fallback": "reicon:link4",
	});
}

export default Component;
