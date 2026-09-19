import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0119acpd.css';
import '../../css/c/cj-ip0b4q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0119acpd"/><path class="cj-ip0b4q"/>`,
		"fallback": "carbon:row-delete",
	});
}

export default Component;
