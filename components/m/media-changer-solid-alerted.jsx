import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij_mazs6p.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij_mazs6p"/><path class="uaycyrbmu"/>`,
		"fallback": "clarity:media-changer-solid-alerted",
	});
}

export default Component;
