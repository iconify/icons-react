import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eo0qe5b0c.css';
import '../../css/p/ps-z6_bls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="eo0qe5b0c"/><path class="ps-z6_bls"/></g>`,
		"fallback": "streamline-plump-color:voice-activation-1",
	});
}

export default Component;
