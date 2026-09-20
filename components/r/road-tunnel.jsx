import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yo1gw-mso.css';
import '../../css/r/r0wf53b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yo1gw-mso"/><path class="r0wf53b4w"/></g>`,
		"fallback": "streamline-ultimate:road-tunnel",
	});
}

export default Component;
