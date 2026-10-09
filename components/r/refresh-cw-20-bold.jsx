import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9ur0zbdu.css';
import '../../css/v/vlk0aab2e.css';
import '../../css/f/fbiyyn6-d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9ur0zbdu"/><path class="vlk0aab2e"/><path class="fbiyyn6-d"/>`,
		"fallback": "energy-icons:refresh-cw-20-bold",
	});
}

export default Component;
