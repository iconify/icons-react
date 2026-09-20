import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dio2vj7yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dio2vj7yi"/>`,
		"fallback": "selfhst:mqttx-light",
	});
}

export default Component;
