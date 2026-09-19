import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5984bc8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5984bc8d"/>`,
		"fallback": "eva:video-off-outline",
	});
}

export default Component;
