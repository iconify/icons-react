import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v0zg4ab8h.css';
import '../../css/y/ya5guhb6t.css';
import '../../css/i/ixl_lxadt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v0zg4ab8h"/><path class="ya5guhb6t"/><path class="ixl_lxadt"/></g>`,
		"fallback": "pepicons-print:magnet",
	});
}

export default Component;
