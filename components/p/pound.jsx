import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loscm5b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loscm5b3s"/>`,
		"fallback": "pixelarticons:pound",
	});
}

export default Component;
