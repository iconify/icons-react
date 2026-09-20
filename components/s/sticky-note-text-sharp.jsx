import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te_5b4bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te_5b4bwy"/>`,
		"fallback": "pixelarticons:sticky-note-text-sharp",
	});
}

export default Component;
