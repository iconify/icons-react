import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofjgs179i.css';
import '../../css/v/vvsvce0wk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fbhog9-zq.css';
import '../../css/c/cjfc5abjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofjgs179i"/><path clip-rule="evenodd" class="vvsvce0wk"/><g class="xtpeb-edw"><path class="fbhog9-zq"/><path class="cjfc5abjr"/></g>`,
		"fallback": "solar:wallpaper-bold-duotone",
	});
}

export default Component;
