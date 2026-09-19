import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnfili8xo.css';
import '../../css/n/nnly1dl6q.css';
import '../../css/p/p2ysx8bbc.css';
import '../../css/z/zbo3cxv1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnfili8xo"/><path class="nnly1dl6q"/><path class="p2ysx8bbc"/><path class="zbo3cxv1e"/>`,
		"fallback": "ion:people-outline",
	});
}

export default Component;
