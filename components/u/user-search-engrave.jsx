import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/p/pz3jf5b8k.css';
import '../../css/c/c334w-shb.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/t/t8eys6bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="pz3jf5b8k wm-s"/><path class="c334w-shb wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="t8eys6bao wm-s"/></g>`,
		"fallback": "withicons:user-search-engrave",
	});
}

export default Component;
