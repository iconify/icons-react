import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/goeo-v3vz.css';
import '../../css/k/ku5dibb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="goeo-v3vz"/><path class="ku5dibb9m wm-a"/></g>`,
		"fallback": "withicons:users-solid",
	});
}

export default Component;
