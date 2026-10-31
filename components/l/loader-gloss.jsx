import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o_htioiak.css';
import '../../css/a/a4n328egc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o_htioiak wm-k"/><path class="a4n328egc wm-a"/></g>`,
		"fallback": "withicons:loader-gloss",
	});
}

export default Component;
