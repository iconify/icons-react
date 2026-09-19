import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idhihzbba.css';
import '../../css/g/g3esovain.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idhihzbba"/><path class="g3esovain"/>`,
		"fallback": "ion:md-skip-forward",
	});
}

export default Component;
