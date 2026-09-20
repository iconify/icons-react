import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mn4bp7bsf.css';
import '../../css/z/zhk99f-bo.css';
import '../../css/y/ya22fsvpd.css';
import '../../css/c/c1xb2abra.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mn4bp7bsf"/><path class="zhk99f-bo"/><path class="ya22fsvpd"/><path class="c1xb2abra"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:move-y-circle",
	});
}

export default Component;
