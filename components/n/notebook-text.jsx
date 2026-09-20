import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f82tjsn5b.css';
import '../../css/g/gurl2ypet.css';
import '../../css/h/hv-6kqb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f82tjsn5b"/><rect class="gurl2ypet"/><path class="hv-6kqb6z"/></g>`,
		"fallback": "lucide:notebook-text",
	});
}

export default Component;
