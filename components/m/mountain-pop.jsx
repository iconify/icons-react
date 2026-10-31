import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/n/nvfw2jb6u.css';
import '../../css/l/l8yynixuh.css';
import '../../css/h/hzby-pbul.css';
import '../../css/f/fgs4w3bos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="nvfw2jb6u"/><path class="l8yynixuh"/><path class="hzby-pbul"/><path class="fgs4w3bos"/></g>`,
		"fallback": "streamline-kameleon-color:mountain-pop",
	});
}

export default Component;
