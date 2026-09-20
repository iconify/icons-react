import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubecpob4l.css';
import '../../css/n/nsmhn8bij.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/p/p54c8n9ij.css';
import '../../css/w/wqg2sgbzb.css';
import '../../css/h/hftppjblv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubecpob4l"/><path class="nsmhn8bij"/><g class="hzhb0bcwn"><path class="p54c8n9ij"/><path class="wqg2sgbzb"/><path class="hftppjblv"/></g>`,
		"fallback": "openmoji:saw",
	});
}

export default Component;
