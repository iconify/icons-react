import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhl7jtbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhl7jtbfa"/>`,
		"fallback": "token:tonic",
	});
}

export default Component;
