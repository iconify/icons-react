import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jitf5ebtf.css';
import '../../css/j/j5iqzhi2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jitf5ebtf"/><path class="j5iqzhi2j"/></g>`,
		"fallback": "majesticons:map-simple-marker",
	});
}

export default Component;
