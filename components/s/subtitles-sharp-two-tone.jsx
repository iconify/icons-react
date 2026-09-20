import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b2ps5cbvw.css';
import '../../css/q/q0k2hfgit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b2ps5cbvw"/><path class="q0k2hfgit"/></g>`,
		"fallback": "keyline-icons:subtitles-sharp-two-tone",
	});
}

export default Component;
