import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn2ue_csy.css';
import '../../css/p/p6thd6bpb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn2ue_csy"/><path class="p6thd6bpb"/>`,
		"fallback": "lineicons:share",
	});
}

export default Component;
