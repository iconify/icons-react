import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ifa0otbxj.css';
import '../../css/a/a6tytigdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ifa0otbxj"/><path class="a6tytigdv wm-a"/></g>`,
		"fallback": "withicons:taxi-solid",
	});
}

export default Component;
