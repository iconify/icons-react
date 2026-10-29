import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/c/cb8204bna.css';
import '../../css/l/llxi8eg4n.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="cb8204bna wm-s"/><path class="llxi8eg4n wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="ekmlpmtjg wm-s"/></g>`,
		"fallback": "withicons:user-cog-engrave",
	});
}

export default Component;
