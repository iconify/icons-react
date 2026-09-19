import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja48t5b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ja48t5b2w"/>`,
		"fallback": "griddy-icons:water-waves",
	});
}

export default Component;
