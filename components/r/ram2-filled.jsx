import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ggnuxxlrx.css';
import '../../css/x/xdjgyjbwj.css';
import '../../css/t/twji5-hcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ggnuxxlrx"/><path class="xdjgyjbwj"/><path class="twji5-hcy"/></g>`,
		"fallback": "reicon:ram2-filled",
	});
}

export default Component;
