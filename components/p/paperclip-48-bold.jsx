import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7vpajbbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7vpajbbg"/>`,
		"fallback": "energy-icons:paperclip-48-bold",
	});
}

export default Component;
