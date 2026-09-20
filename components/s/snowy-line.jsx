import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn8awebqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn8awebqo"/>`,
		"fallback": "ri:snowy-line",
	});
}

export default Component;
