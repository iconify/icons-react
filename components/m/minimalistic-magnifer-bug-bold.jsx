import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b-jkxsbde.css';
import '../../css/v/v2xfabcfj.css';
import '../../css/w/w05w1wx4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b-jkxsbde"/><path class="v2xfabcfj"/><path class="w05w1wx4w"/></g>`,
		"fallback": "solar:minimalistic-magnifer-bug-bold",
	});
}

export default Component;
