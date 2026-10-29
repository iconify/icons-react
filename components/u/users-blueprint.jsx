import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e9i5xxitp.css';
import '../../css/b/bleplfymj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qgy6jma8g.css';
import '../../css/m/mjjaukvra.css';
import '../../css/n/n3800iaop.css';
import '../../css/t/tqj8uzelo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e9i5xxitp wm-deco"/><path class="bleplfymj wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="qgy6jma8g wm-k"/><path class="mjjaukvra wm-a"/><path class="n3800iaop wm-k"/><path class="tqj8uzelo wm-a"/></g>`,
		"fallback": "withicons:users-blueprint",
	});
}

export default Component;
