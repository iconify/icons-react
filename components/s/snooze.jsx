import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhpymzg_r.css';
import '../../css/c/ctg85nb0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhpymzg_r"/><path class="ctg85nb0c"/>`,
		"fallback": "carbon:snooze",
	});
}

export default Component;
