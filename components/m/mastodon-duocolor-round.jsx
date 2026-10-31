import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rmboa2b4m.css';
import '../../css/o/ooe9rly_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rmboa2b4m"/><path class="ooe9rly_k"/></g>`,
		"fallback": "coolicons:mastodon-duocolor-round",
	});
}

export default Component;
