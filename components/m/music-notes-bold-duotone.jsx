import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-i4kgtbw.css';
import '../../css/t/tsgsm7xry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-i4kgtbw"/><path class="tsgsm7xry"/>`,
		"fallback": "solar:music-notes-bold-duotone",
	});
}

export default Component;
