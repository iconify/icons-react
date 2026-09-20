import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gwb741bry.css';
import '../../css/j/jb2_b33yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gwb741bry"/><path class="jb2_b33yy"/></g>`,
		"fallback": "streamline-freehand:retouch-magic-wand",
	});
}

export default Component;
