import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e3r28t5tz.css';
import '../../css/v/vv-7p9b_v.css';
import '../../css/z/z9qnrxw9f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e3r28t5tz"/><path class="vv-7p9b_v"/><path class="z9qnrxw9f"/></g>`,
		"fallback": "pepicons-pencil:peso",
	});
}

export default Component;
