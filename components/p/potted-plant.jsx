import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssv07eb-f.css';
import '../../css/r/rr4ocndgb.css';
import '../../css/s/sy2u0ubrg.css';
import '../../css/q/qyo7jvbod.css';
import '../../css/y/y293zvb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssv07eb-f wm-shadow"/><path class="rr4ocndgb wm-shadow"/><path class="sy2u0ubrg"/><path class="qyo7jvbod"/><path class="y293zvb6o"/></g>`,
		"fallback": "withicons-brutal:potted-plant",
	});
}

export default Component;
