import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h6pfvubgz.css';
import '../../css/t/tnqyvabzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h6pfvubgz"/><path class="tnqyvabzh"/></g>`,
		"fallback": "hugeicons:simcard-02",
	});
}

export default Component;
