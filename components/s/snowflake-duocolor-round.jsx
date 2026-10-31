import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gw5inactd.css';
import '../../css/p/prboy499u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gw5inactd"/><path class="prboy499u"/></g>`,
		"fallback": "coolicons:snowflake-duocolor-round",
	});
}

export default Component;
