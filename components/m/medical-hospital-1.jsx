import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8ht6cblc.css';
import '../../css/j/jeh126nmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v8ht6cblc"/><path class="jeh126nmi"/></g>`,
		"fallback": "streamline-ultimate:medical-hospital-1",
	});
}

export default Component;
