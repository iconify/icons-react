import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z9edi6b_u.css';
import '../../css/k/kd06ylh6g.css';
import '../../css/e/einsz8zxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="z9edi6b_u"/><circle class="kd06ylh6g"/><circle class="einsz8zxl"/></g>`,
		"fallback": "pajamas:status-preparing-borderless",
	});
}

export default Component;
