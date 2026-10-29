import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/srev3-blk.css';
import '../../css/o/ob4hknlne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="srev3-blk"/><path class="ob4hknlne wm-a"/></g>`,
		"fallback": "withicons:layout-list-solid",
	});
}

export default Component;
