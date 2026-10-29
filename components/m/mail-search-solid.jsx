import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vim8robgf.css';
import '../../css/z/zre5rhlhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vim8robgf"/><path class="wm-s zre5rhlhl"/></g>`,
		"fallback": "withicons:mail-search-solid",
	});
}

export default Component;
