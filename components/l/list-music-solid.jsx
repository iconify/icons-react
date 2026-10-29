import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n4ezgtbsh.css';
import '../../css/y/yiqtk9b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n4ezgtbsh"/><path class="wm-a yiqtk9b5o"/></g>`,
		"fallback": "withicons:list-music-solid",
	});
}

export default Component;
