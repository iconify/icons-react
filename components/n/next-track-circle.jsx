import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dzoci1sow.css';
import '../../css/i/ihpqbh3gg.css';
import '../../css/f/fmjfe4b-j.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dzoci1sow"/><path class="ihpqbh3gg"/><path class="fmjfe4b-j"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:next-track-circle",
	});
}

export default Component;
