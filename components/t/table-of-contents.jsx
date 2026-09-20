import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eoq-ilkyb.css';
import '../../css/a/ahy7r9h0a.css';
import '../../css/b/bnnnmnbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="eoq-ilkyb"/><path class="ahy7r9h0a"/><path vector-effect="non-scaling-stroke" class="bnnnmnbmb"/></g>`,
		"fallback": "wordpress:table-of-contents",
	});
}

export default Component;
