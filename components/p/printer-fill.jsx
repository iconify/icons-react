import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8hs5jbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8hs5jbqw"/>`,
		"fallback": "iconamoon:printer-fill",
	});
}

export default Component;
