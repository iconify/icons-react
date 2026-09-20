import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c0dcpubfz.css';
import '../../css/f/f5q372mbj.css';
import '../../css/z/zus3k94wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c0dcpubfz"/><path class="f5q372mbj"/><path class="zus3k94wd"/></g>`,
		"fallback": "lucide:trophy",
	});
}

export default Component;
