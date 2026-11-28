import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imhjn0jvd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x5p80bb3e.css';
import '../../css/z/ztw5k99hi.css';
import '../../css/y/yu9-2bb7w.css';
import '../../css/c/cqw1z5qhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imhjn0jvd secondary"/><g class="dt0cm9dhy primary"><path class="x5p80bb3e"/><path class="ztw5k99hi"/><path class="yu9-2bb7w"/><path class="cqw1z5qhg"/></g>`,
		"fallback": "iconaut:layers-minus-duo",
	});
}

export default Component;
