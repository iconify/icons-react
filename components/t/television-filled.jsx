import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5rhzabru.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5rhzabru"/>`,
		"fallback": "dinkie-icons:television-filled",
	});
}

export default Component;
