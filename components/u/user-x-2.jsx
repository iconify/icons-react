import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jrjc9qesx.css';
import '../../css/m/mio52ig2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jrjc9qesx"/><circle class="mio52ig2b"/></g>`,
		"fallback": "lucide:user-x-2",
	});
}

export default Component;
