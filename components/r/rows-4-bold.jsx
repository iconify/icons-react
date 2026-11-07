import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf5tgeqen.css';
import '../../css/g/g7lf42b8j.css';
import '../../css/k/kjee7xvdg.css';
import '../../css/j/jqlk-kbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf5tgeqen"/><path class="g7lf42b8j"/><path class="kjee7xvdg"/><path class="jqlk-kbvz"/>`,
		"fallback": "solar:rows-4-bold",
	});
}

export default Component;
