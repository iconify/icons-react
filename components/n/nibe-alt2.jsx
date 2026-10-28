import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn6g8ebuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn6g8ebuo"/>`,
		"fallback": "cbi:nibe-alt2",
	});
}

export default Component;
