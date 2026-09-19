import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gczf5uo1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gczf5uo1u"/>`,
		"fallback": "hugeicons:mp3-01",
	});
}

export default Component;
