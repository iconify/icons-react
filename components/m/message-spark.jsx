import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd57_qkrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd57_qkrg"/>`,
		"fallback": "tabler:message-spark",
	});
}

export default Component;
