import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvne9bckp.css';
import '../../css/b/bb399mb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qvne9bckp"/><path class="bb399mb_w"/></g>`,
		"fallback": "majesticons:tooltips-2",
	});
}

export default Component;
