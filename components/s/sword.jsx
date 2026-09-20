import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/thfq4gbnm.css';
import '../../css/w/wd4pbac6a.css';
import '../../css/k/kubn6vbik.css';
import '../../css/y/ywpiuebfh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="thfq4gbnm"/><path class="wd4pbac6a"/><path class="kubn6vbik"/><path class="ywpiuebfh"/></g>`,
		"fallback": "pepicons-pencil:sword",
	});
}

export default Component;
