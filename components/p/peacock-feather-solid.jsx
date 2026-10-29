import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tx4zxabig.css';
import '../../css/k/k-k8gdc5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tx4zxabig"/><path class="k-k8gdc5v wm-a"/></g>`,
		"fallback": "withicons:peacock-feather-solid",
	});
}

export default Component;
