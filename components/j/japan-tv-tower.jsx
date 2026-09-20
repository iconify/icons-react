import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfcmr664f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfcmr664f"/>`,
		"fallback": "roentgen:japan-tv-tower",
	});
}

export default Component;
