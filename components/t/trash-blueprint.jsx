import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a-n3ew6zo.css';
import '../../css/a/acrplfeco.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/fnqqe5b5e.css';
import '../../css/c/c7xnwmbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="a-n3ew6zo wm-deco"/><path class="acrplfeco wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="fnqqe5b5e wm-k"/><path class="c7xnwmbpp wm-a"/></g>`,
		"fallback": "withicons:trash-blueprint",
	});
}

export default Component;
