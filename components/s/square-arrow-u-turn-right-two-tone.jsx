import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bk0wc9bwk.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/v/vo64d318x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bk0wc9bwk"/><path class="i5lvicvhn"/><path class="vo64d318x"/></g>`,
		"fallback": "keyline-icons:square-arrow-u-turn-right-two-tone",
	});
}

export default Component;
