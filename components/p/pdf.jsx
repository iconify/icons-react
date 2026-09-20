import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohaf0s28w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohaf0s28w"/>`,
		"fallback": "tabler:pdf",
	});
}

export default Component;
