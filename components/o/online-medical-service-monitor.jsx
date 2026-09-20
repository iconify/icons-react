import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bhgiopbup.css';
import '../../css/o/oploqsbxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bhgiopbup"/><path class="oploqsbxm"/></g>`,
		"fallback": "streamline:online-medical-service-monitor",
	});
}

export default Component;
