import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypaqnab8w.css';
import '../../css/l/lsoorebqt.css';
import '../../css/h/hd4evdbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypaqnab8w"/><path class="lsoorebqt"/><path class="hd4evdbaj"/>`,
		"fallback": "streamline-freehand:paragraphs-indent-last-line",
	});
}

export default Component;
