import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ozpvzzbjk.css';
import '../../css/j/jd342ib1u.css';
import '../../css/l/lo4dh9lmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ozpvzzbjk"/><path class="jd342ib1u wm-a"/><path class="lo4dh9lmp wm-s"/></g>`,
		"fallback": "withicons:satellite-solid",
	});
}

export default Component;
