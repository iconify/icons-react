import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9kfjgbxq.css';
import '../../css/q/q1y4cdbvh.css';
import '../../css/w/wd6v8jb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f9kfjgbxq"/><path class="q1y4cdbvh"/><path class="wd6v8jb0i"/></g>`,
		"fallback": "tabler:phone-call-filled",
	});
}

export default Component;
