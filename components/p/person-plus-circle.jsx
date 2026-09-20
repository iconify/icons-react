import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e37b-0bjt.css';
import '../../css/a/adl6-qbwr.css';
import '../../css/n/nyy5-63ow.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e37b-0bjt"/><path class="adl6-qbwr"/><path class="nyy5-63ow"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:person-plus-circle",
	});
}

export default Component;
