import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mreil7xuy.css';
import '../../css/q/qyf29p93f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mreil7xuy"/><path class="qyf29p93f wm-s"/></g>`,
		"fallback": "withicons:smile-plus-solid",
	});
}

export default Component;
