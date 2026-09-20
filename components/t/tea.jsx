import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klb17b-9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klb17b-9q"/>`,
		"fallback": "pixelarticons:tea",
	});
}

export default Component;
