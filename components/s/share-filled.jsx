import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrnkw556h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrnkw556h"/>`,
		"fallback": "weui:share-filled",
	});
}

export default Component;
