import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yvxim9bao.css';
import '../../css/t/tm9q6ob1c.css';
import '../../css/x/x5e6z5q6n.css';
import '../../css/b/by3-zccen.css';
import '../../css/q/q08n-4bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yvxim9bao"/><path class="tm9q6ob1c wm-deco"/><path class="wm-deco x5e6z5q6n"/><path class="by3-zccen wm-k"/><path class="q08n-4bjs wm-a"/></g>`,
		"fallback": "withicons:sun-moon-blueprint",
	});
}

export default Component;
