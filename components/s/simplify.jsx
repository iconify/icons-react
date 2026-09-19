import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sss_nfbgc.css';
import '../../css/b/bztkctbob.css';
import '../../css/m/m-wjl1bwa.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sss_nfbgc"><path class="bztkctbob"/><path class="m-wjl1bwa"/></g>`,
		"fallback": "gis:simplify",
	});
}

export default Component;
