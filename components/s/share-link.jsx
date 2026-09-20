import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/ev_angbau.css';
import '../../css/f/f4slk7mgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ev_angbau"/><path class="f4slk7mgd"/></g>`,
		"fallback": "streamline-sharp-color:share-link",
	});
}

export default Component;
