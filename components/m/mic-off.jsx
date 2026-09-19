import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqbt93bhv.css';
import '../../css/i/i47a-xbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dqbt93bhv"/><path class="i47a-xbei"/></g>`,
		"fallback": "feather:mic-off",
	});
}

export default Component;
