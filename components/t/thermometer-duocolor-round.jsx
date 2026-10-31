import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rtfbuubui.css';
import '../../css/n/njoo6ks6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rtfbuubui"/><path class="njoo6ks6c"/></g>`,
		"fallback": "coolicons:thermometer-duocolor-round",
	});
}

export default Component;
