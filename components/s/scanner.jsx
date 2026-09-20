import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lj-ce4hbh.css';
import '../../css/v/vu_58yblb.css';
import '../../css/s/sroq-s5ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lj-ce4hbh"/><path class="vu_58yblb"/><path class="sroq-s5ev"/></g>`,
		"fallback": "streamline-freehand:scanner",
	});
}

export default Component;
