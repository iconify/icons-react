import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q14_dk0ar.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q14_dk0ar"/>`,
		"fallback": "pinhead:person-swinging-golf-club-beside-flagstick-with-pennant",
	});
}

export default Component;
