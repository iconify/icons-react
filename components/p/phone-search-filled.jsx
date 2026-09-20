import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu5x9bbvk.css';
import '../../css/n/ndj5swlkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu5x9bbvk"/><path class="ndj5swlkr"/>`,
		"fallback": "tdesign:phone-search-filled",
	});
}

export default Component;
