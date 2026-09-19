import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni1s3p96w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni1s3p96w"/>`,
		"fallback": "game-icons:secret-book",
	});
}

export default Component;
