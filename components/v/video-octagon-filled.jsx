import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bna30gm7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bna30gm7k"/>`,
		"fallback": "reicon:video-octagon-filled",
	});
}

export default Component;
