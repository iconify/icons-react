import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/inqsumbbb.css';
import '../../css/k/kq3uvdbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="inqsumbbb"/><path class="kq3uvdbcl"/></g>`,
		"fallback": "nrk:media-direkte-notlive",
	});
}

export default Component;
