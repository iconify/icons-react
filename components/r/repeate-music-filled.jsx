import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tx7mi2bqu.css';
import '../../css/q/q02wmqqds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tx7mi2bqu"/><path class="q02wmqqds"/></g>`,
		"fallback": "reicon:repeate-music-filled",
	});
}

export default Component;
