import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/setvc4bqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="setvc4bqc"/>`,
		"fallback": "ix:location-filled",
	});
}

export default Component;
