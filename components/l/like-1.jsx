import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd5_n25wn.css';
import '../../css/f/fau-rwx9l.css';
import '../../css/s/sr62qfbbl.css';
import '../../css/f/f1a5py3hc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cd5_n25wn"/><path class="fau-rwx9l"/><path class="sr62qfbbl"/><path class="f1a5py3hc"/></g>`,
		"fallback": "streamline-color:like-1",
	});
}

export default Component;
