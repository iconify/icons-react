import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxn08zbuc.css';
import '../../css/j/jfkkuwbaa.css';
import '../../css/r/rupw6qblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxn08zbuc"/><path class="jfkkuwbaa"/><path class="rupw6qblq"/>`,
		"fallback": "mingcute:speaker-line",
	});
}

export default Component;
