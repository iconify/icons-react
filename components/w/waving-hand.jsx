import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c-xwwyb7z.css';
import '../../css/z/zp_4s8btr.css';
import '../../css/r/rm-s3cucg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="c-xwwyb7z"/><path class="zp_4s8btr"/><path class="rm-s3cucg"/></g>`,
		"fallback": "streamline-plump-color:waving-hand",
	});
}

export default Component;
