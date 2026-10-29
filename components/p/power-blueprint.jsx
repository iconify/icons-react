import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jsd5p2bkd.css';
import '../../css/c/cr7efcbob.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/c/cb-t85bmb.css';
import '../../css/a/ajrx2wbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jsd5p2bkd wm-deco"/><path class="cr7efcbob wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="cb-t85bmb"/><path class="ajrx2wbff"/></g>`,
		"fallback": "withicons:power-blueprint",
	});
}

export default Component;
