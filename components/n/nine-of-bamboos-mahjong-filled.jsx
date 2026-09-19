import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snfej5b-n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snfej5b-n"/>`,
		"fallback": "dinkie-icons:nine-of-bamboos-mahjong-filled",
	});
}

export default Component;
