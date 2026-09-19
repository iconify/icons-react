import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nc0ss4key.css';
import '../../css/s/scuo7ib6n.css';
import '../../css/n/njqf7ab-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nc0ss4key"/><path class="scuo7ib6n"/><path class="njqf7ab-x"/></g>`,
		"fallback": "pepicons:person-plus",
	});
}

export default Component;
