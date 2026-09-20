import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/ba-mq29gm.css';
import '../../css/q/qhc50zb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ba-mq29gm"/><path class="qhc50zb7o"/></g>`,
		"fallback": "keyline-icons:shredder-two-tone",
	});
}

export default Component;
