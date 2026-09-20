import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d-z4nbt_f.css';
import '../../css/t/t9kw69ekp.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d-z4nbt_f"/><path class="t9kw69ekp"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:letter-circle",
	});
}

export default Component;
