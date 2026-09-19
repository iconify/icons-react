import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd0x-741h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd0x-741h"/>`,
		"fallback": "fluent-mdl2:location-fill",
	});
}

export default Component;
