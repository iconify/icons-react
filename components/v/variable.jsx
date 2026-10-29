import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6_9zfbaj.css';
import '../../css/j/jp5e_gutf.css';
import '../../css/b/bjkn2kbma.css';
import '../../css/l/lw9bm9bup.css';
import '../../css/x/xg8vraclp.css';
import '../../css/w/wl8v94bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6_9zfbaj wm-k"/><path class="jp5e_gutf wm-k"/><path class="bjkn2kbma wm-k"/><path class="lw9bm9bup wm-a"/><path class="wm-a xg8vraclp"/><path class="wl8v94bew wm-a"/></g>`,
		"fallback": "withicons-anime:variable",
	});
}

export default Component;
