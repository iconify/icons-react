import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m-7u57b3n.css';
import '../../css/d/d3i_dbbrj.css';
import '../../css/e/ep70jebpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m-7u57b3n"/><path class="d3i_dbbrj"/><path class="ep70jebpf"/></g>`,
		"fallback": "hugeicons:sms-code",
	});
}

export default Component;
