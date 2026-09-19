import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkx2bjwdy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkx2bjwdy"/>`,
		"fallback": "garden:speech-bubble-conversation-stroke-12",
	});
}

export default Component;
