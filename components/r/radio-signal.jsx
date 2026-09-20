import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7kvxpb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7kvxpb4z"/>`,
		"fallback": "pixelarticons:radio-signal",
	});
}

export default Component;
