import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru1stbp4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru1stbp4f"/>`,
		"fallback": "roentgen:stratovolcano-lava",
	});
}

export default Component;
