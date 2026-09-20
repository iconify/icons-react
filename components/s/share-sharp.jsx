import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krt54e2yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krt54e2yz"/>`,
		"fallback": "pixelarticons:share-sharp",
	});
}

export default Component;
