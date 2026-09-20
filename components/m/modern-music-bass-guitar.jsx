import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c8eq9g1pg.css';
import '../../css/e/eon8e1bfw.css';
import '../../css/f/f5pdzmbin.css';
import '../../css/w/wch66iwxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c8eq9g1pg"/><path class="eon8e1bfw"/><path class="f5pdzmbin"/><path class="wch66iwxz"/></g>`,
		"fallback": "streamline-freehand:modern-music-bass-guitar",
	});
}

export default Component;
