import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlkw4ackd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlkw4ackd"/>`,
		"fallback": "f7:rectangle-stack-person-crop-fill",
	});
}

export default Component;
