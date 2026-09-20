import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-s4f8x0t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-s4f8x0t"/>`,
		"fallback": "qlementine-icons:speaker-mute-16",
	});
}

export default Component;
