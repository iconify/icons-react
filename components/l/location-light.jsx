import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyte5s28l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyte5s28l"/>`,
		"fallback": "stash:location-light",
	});
}

export default Component;
