import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7h66w8ve.css';
import '../../css/c/cwbr59xig.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7h66w8ve"/><path class="cwbr59xig"/>`,
		"fallback": "carbon:subnet-acl-rules",
	});
}

export default Component;
