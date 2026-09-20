import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9bf_6m2p.css';
import '../../css/p/pandl9bpw.css';
import '../../css/a/at4hegbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g9bf_6m2p"/><path class="pandl9bpw"/><path class="at4hegbfq"/></g>`,
		"fallback": "tabler:s-turn-up",
	});
}

export default Component;
