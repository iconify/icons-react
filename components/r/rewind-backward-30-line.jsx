import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puocb58pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puocb58pw"/>`,
		"fallback": "mingcute:rewind-backward-30-line",
	});
}

export default Component;
