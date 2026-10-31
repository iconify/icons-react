import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqe71b-9z.css';
import '../../css/l/l1kbw1b1l.css';
import '../../css/c/cfoaekbqc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqe71b-9z"/><path class="l1kbw1b1l"/><path class="cfoaekbqc"/>`,
		"fallback": "tabler-flags:norway",
	});
}

export default Component;
