import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cle0dtw2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cle0dtw2n"/>`,
		"fallback": "pixelarticons:reply",
	});
}

export default Component;
