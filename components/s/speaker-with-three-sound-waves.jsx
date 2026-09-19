import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih80zmben.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih80zmben"/>`,
		"fallback": "dinkie-icons:speaker-with-three-sound-waves",
	});
}

export default Component;
