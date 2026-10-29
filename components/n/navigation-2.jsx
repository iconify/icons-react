import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp-rs9b5v.css';
import '../../css/g/g4r9qeblv.css';
import '../../css/c/cbz0ggb3u.css';
import '../../css/p/pw2rrzbrr.css';
import '../../css/p/px91c25qt.css';
import '../../css/f/f9vet_b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-shadow xp-rs9b5v"/><path class="g4r9qeblv wm-shadow"/><path class="cbz0ggb3u"/><path class="pw2rrzbrr"/><path class="px91c25qt"/><path class="f9vet_b3u"/></g>`,
		"fallback": "withicons-skeuo:navigation-2",
	});
}

export default Component;
