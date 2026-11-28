import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk0_bffgj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b8ykfyb9e.css';
import '../../css/w/w9yqwqbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk0_bffgj secondary"/><g class="dt0cm9dhy primary"><path class="b8ykfyb9e"/><path class="w9yqwqbyt"/></g>`,
		"fallback": "iconaut:tag-duo",
	});
}

export default Component;
