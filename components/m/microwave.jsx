import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzwkyi3nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzwkyi3nd"/>`,
		"fallback": "noviair:microwave",
	});
}

export default Component;
