import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg3nfg2gw.css';
import '../../css/z/zhypwob1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg3nfg2gw"/><path class="zhypwob1g"/>`,
		"fallback": "tdesign:user-time-filled",
	});
}

export default Component;
