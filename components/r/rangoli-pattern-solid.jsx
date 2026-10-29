import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vv1xrh3lv.css';
import '../../css/i/izwskzbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vv1xrh3lv"/><path class="izwskzbav wm-a"/></g>`,
		"fallback": "withicons:rangoli-pattern-solid",
	});
}

export default Component;
