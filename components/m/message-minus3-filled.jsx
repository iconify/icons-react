import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlqc3jgmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlqc3jgmv"/>`,
		"fallback": "reicon:message-minus3-filled",
	});
}

export default Component;
