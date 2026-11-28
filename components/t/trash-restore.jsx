import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/na4rgbmvw.css';
import '../../css/v/vpkn_nb1r.css';
import '../../css/f/f9guiachc.css';
import '../../css/u/ustj7ibxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="na4rgbmvw"/><path class="vpkn_nb1r"/><path class="f9guiachc"/><path class="ustj7ibxg"/></g>`,
		"fallback": "iconaut:trash-restore",
	});
}

export default Component;
