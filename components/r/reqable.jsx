import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qteu-bb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qteu-bb8d"/>`,
		"fallback": "thesvg-color:reqable",
	});
}

export default Component;
