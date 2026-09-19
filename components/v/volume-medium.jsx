import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8vwuw0xp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8vwuw0xp"/>`,
		"fallback": "icomoon-free:volume-medium",
	});
}

export default Component;
