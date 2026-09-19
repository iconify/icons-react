import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8nalnb6j.css';
import '../../css/z/z89mqybmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8nalnb6j"/><path class="z89mqybmm"/>`,
		"fallback": "flag:qa-1x1",
	});
}

export default Component;
