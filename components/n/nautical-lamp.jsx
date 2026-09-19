import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz7ig2byl.css';
import '../../css/r/r84d-fjav.css';
import '../../css/i/i_sm4v1ds.css';
import '../../css/w/wss-6qbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz7ig2byl"/><path class="r84d-fjav"/><path class="i_sm4v1ds"/><path class="wss-6qbmu"/>`,
		"fallback": "cbi:nautical-lamp",
	});
}

export default Component;
