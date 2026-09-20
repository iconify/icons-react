import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvsvpldwj.css';
import '../../css/j/j-ysd_kuz.css';
import '../../css/y/y295kubtu.css';
import '../../css/p/p-9ygcbtu.css';
import '../../css/d/dsktp0eyt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dvsvpldwj"/><path class="j-ysd_kuz"/><path class="y295kubtu"/><path class="p-9ygcbtu"/><path class="dsktp0eyt"/></g>`,
		"fallback": "streamline-color:steering-wheel",
	});
}

export default Component;
