import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgs2vu6el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgs2vu6el"/>`,
		"fallback": "pixelarticons:university-sharp",
	});
}

export default Component;
