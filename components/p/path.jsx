import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgw0anjer.css';
import '../../css/h/hhr-dvt9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dgw0anjer"/><path class="hhr-dvt9p"/></g>`,
		"fallback": "reicon:path",
	});
}

export default Component;
