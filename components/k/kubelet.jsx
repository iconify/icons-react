import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8xj_quvl.css';
import '../../css/h/hqconcbne.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8xj_quvl"/><path class="hqconcbne"/>`,
		"fallback": "carbon:kubelet",
	});
}

export default Component;
