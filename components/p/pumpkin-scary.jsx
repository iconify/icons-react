import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy5djvw9y.css';
import '../../css/x/xppqoitez.css';
import '../../css/y/yi1_783qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sy5djvw9y"/><path class="xppqoitez"/><path class="yi1_783qf"/></g>`,
		"fallback": "tabler:pumpkin-scary",
	});
}

export default Component;
