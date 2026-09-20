import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_786rq-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_786rq-l"/>`,
		"fallback": "tabler:quote-filled",
	});
}

export default Component;
