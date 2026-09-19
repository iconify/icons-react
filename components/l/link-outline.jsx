import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hbn71sjeo.css';
import '../../css/z/zai84lbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="link-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hbn71sjeo"/><path class="zai84lbsw"/></g></g>`,
		"fallback": "cuida:link-outline",
	});
}

export default Component;
