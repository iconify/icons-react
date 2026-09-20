import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc9d3gb3u.css';
import '../../css/c/cikucs1sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mc9d3gb3u"/><path class="cikucs1sa"/></g>`,
		"fallback": "tdesign:plantuml",
	});
}

export default Component;
