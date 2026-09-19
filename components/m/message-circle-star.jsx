import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu72iwgtz.css';
import '../../css/m/myfc5_k7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu72iwgtz"/><path class="myfc5_k7f"/>`,
		"fallback": "boxicons:message-circle-star",
	});
}

export default Component;
