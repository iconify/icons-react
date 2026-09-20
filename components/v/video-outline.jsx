import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rij7cdc-q.css';
import '../../css/f/f7j85k9vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rij7cdc-q"/><path class="f7j85k9vv"/>`,
		"fallback": "typcn:video-outline",
	});
}

export default Component;
