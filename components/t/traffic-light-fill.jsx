import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jrcb3ubqp.css';
import '../../css/x/xsn9nsanb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="jrcb3ubqp"/><path class="xsn9nsanb"/></g>`,
		"fallback": "keyline-icons:traffic-light-fill",
	});
}

export default Component;
