import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xys4lib4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xys4lib4j"/>`,
		"fallback": "pixelarticons:languages",
	});
}

export default Component;
