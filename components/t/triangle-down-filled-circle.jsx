import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v1dheebdz.css';
import '../../css/s/sp5_txb5b.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v1dheebdz"/><path class="sp5_txb5b"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:triangle-down-filled-circle",
	});
}

export default Component;
