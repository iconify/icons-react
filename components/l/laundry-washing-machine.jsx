import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/exrbxu9-v.css';
import '../../css/h/hxf48qibx.css';
import '../../css/u/u88y-n2cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="exrbxu9-v"/><path class="hxf48qibx"/><path class="u88y-n2cz"/></g>`,
		"fallback": "streamline-freehand:laundry-washing-machine",
	});
}

export default Component;
