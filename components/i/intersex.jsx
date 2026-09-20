import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2m8xnber.css';
import '../../css/f/f05ck7rgt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2m8xnber"/><circle class="f05ck7rgt"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:intersex",
	});
}

export default Component;
