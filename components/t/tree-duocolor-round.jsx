import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfau-nh5u.css';
import '../../css/a/amo4yk7fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfau-nh5u"/><path class="amo4yk7fe"/></g>`,
		"fallback": "coolicons:tree-duocolor-round",
	});
}

export default Component;
