import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrwb58_hr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrwb58_hr"/>`,
		"fallback": "game-icons:robot-golem",
	});
}

export default Component;
