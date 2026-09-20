import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ndcvrosav.css';
import '../../css/q/q6f35k1su.css';
import '../../css/v/v_fr_tfux.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ndcvrosav"/><path class="q6f35k1su"/><path class="v_fr_tfux"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:previous-track-circle",
	});
}

export default Component;
