import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j1eywwzeg.css';
import '../../css/b/bqdb7bb6c.css';
import '../../css/v/vi1wv7_it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j1eywwzeg"/><path class="bqdb7bb6c"/><path class="vi1wv7_it"/></g>`,
		"fallback": "streamline-freehand:wealth-pearl-ring",
	});
}

export default Component;
