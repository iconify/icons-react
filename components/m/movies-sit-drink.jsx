import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/roi7ocp-x.css';
import '../../css/q/qymrhgs1b.css';
import '../../css/c/cikx8uaac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="roi7ocp-x"/><path class="qymrhgs1b"/><path class="cikx8uaac"/></g>`,
		"fallback": "streamline-ultimate:movies-sit-drink",
	});
}

export default Component;
