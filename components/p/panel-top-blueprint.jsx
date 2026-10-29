import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kkm7v7wlq.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xxwofqeju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kkm7v7wlq wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="xxwofqeju"/></g>`,
		"fallback": "withicons:panel-top-blueprint",
	});
}

export default Component;
