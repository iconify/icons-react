import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ijbgxp0li.css';
import '../../css/s/scm4vlkmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ijbgxp0li"/><path class="scm4vlkmj"/></g>`,
		"fallback": "streamline-sharp-color:signal-full",
	});
}

export default Component;
