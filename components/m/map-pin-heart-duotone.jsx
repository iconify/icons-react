import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7gekvbgt.css';
import '../../css/q/qwgg3xbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7gekvbgt"/><path class="qwgg3xbzh"/></g>`,
		"fallback": "keyline-icons:map-pin-heart-duotone",
	});
}

export default Component;
