import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-e4dnbyj.css';
import '../../css/w/w5ov63m_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p-e4dnbyj"/><path class="w5ov63m_f"/></g>`,
		"fallback": "reicon:tick-circle",
	});
}

export default Component;
