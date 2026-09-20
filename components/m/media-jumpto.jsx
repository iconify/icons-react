import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/adkmtobfu.css';
import '../../css/z/zr3ng-b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="adkmtobfu"/><path class="zr3ng-b-y"/></g>`,
		"fallback": "nrk:media-jumpto",
	});
}

export default Component;
