import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6ae_qf3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6ae_qf3t"/>`,
		"fallback": "selfhst:mqttx-dark",
	});
}

export default Component;
