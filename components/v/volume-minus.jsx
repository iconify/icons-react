import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7kf9dwlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7kf9dwlk"/>`,
		"fallback": "keyline-icons:volume-minus",
	});
}

export default Component;
