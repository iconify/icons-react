import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa0hl4bbs.css';
import '../../css/a/a3abudbgg.css';
import '../../css/x/xc8hbmbnc.css';
import '../../css/w/w9nge6bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa0hl4bbs wm-k"/><path class="a3abudbgg wm-k"/><path class="wm-a xc8hbmbnc"/><path class="w9nge6bha wm-a"/>`,
		"fallback": "withicons-bauhaus:notebook",
	});
}

export default Component;
