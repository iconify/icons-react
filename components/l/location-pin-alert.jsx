import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5i58ebyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5i58ebyg"/>`,
		"fallback": "griddy-icons:location-pin-alert",
	});
}

export default Component;
