import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7-64xb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7-64xb2p"/>`,
		"fallback": "stash:times-circle-light",
	});
}

export default Component;
