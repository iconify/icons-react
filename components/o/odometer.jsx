import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmk826btk.css';
import '../../css/x/xvjlt3b7b.css';
import '../../css/x/xdka2wbio.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmk826btk"/><path class="xvjlt3b7b"/><path class="xdka2wbio"/>`,
		"fallback": "ep:odometer",
	});
}

export default Component;
