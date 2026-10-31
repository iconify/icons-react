import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z0ph22pup.css';
import '../../css/x/xxjsd1b8x.css';
import '../../css/q/qcfnobbty.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="z0ph22pup"/><path class="wm-k xxjsd1b8x"/><path class="qcfnobbty wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:palm-tree",
	});
}

export default Component;
