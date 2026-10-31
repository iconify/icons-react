import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbcrotb3z.css';
import '../../css/k/kthkii72m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbcrotb3z"/><path class="kthkii72m"/></g>`,
		"fallback": "coolicons:slack-duotone-round",
	});
}

export default Component;
