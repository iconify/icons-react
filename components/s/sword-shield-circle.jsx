import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hgiw2j25x.css';
import '../../css/b/br7532bxz.css';
import '../../css/s/s2m_p0voo.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hgiw2j25x"/><path class="br7532bxz"/><path class="s2m_p0voo"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:sword-shield-circle",
	});
}

export default Component;
