import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/x/x3xcykbud.css';
import '../../css/t/t3tcnvjvn.css';
import '../../css/c/chcyqyeuw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="x3xcykbud"/><path class="t3tcnvjvn"/><path class="chcyqyeuw"/></g>`,
		"fallback": "streamline-kameleon-color:play-duo",
	});
}

export default Component;
