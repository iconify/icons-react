import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/ssc8edcoz.css';
import '../../css/k/k2kob9hct.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ssc8edcoz"/><path class="k2kob9hct"/></g>`,
		"fallback": "streamline-flex-color:surveillance-camera-flat",
	});
}

export default Component;
