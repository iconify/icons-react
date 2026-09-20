import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtx181bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtx181bgv"/>`,
		"fallback": "pixelarticons:spinner",
	});
}

export default Component;
