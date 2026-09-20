import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua0op0ati.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua0op0ati"/>`,
		"fallback": "roentgen:stratovolcano-smoke-2",
	});
}

export default Component;
