import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe0e3pbeu.css';
import '../../css/j/je44y9b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qe0e3pbeu"/><path class="je44y9b3x"/></g>`,
		"fallback": "streamline-ultimate:synchronize-refresh-arrow",
	});
}

export default Component;
