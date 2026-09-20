import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hfr7pfbab.css';
import '../../css/a/aqhsheffi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hfr7pfbab"/><path class="aqhsheffi"/></g>`,
		"fallback": "streamline-ultimate:single-neutral-monitor",
	});
}

export default Component;
