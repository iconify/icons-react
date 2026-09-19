import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e6nwoqmxi.css';
import '../../css/y/ymgnm4bpg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e6nwoqmxi"/><path class="ymgnm4bpg"/></g>`,
		"fallback": "foundation:social-stumbleupon",
	});
}

export default Component;
