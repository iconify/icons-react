import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l8wxdq4kw.css';
import '../../css/s/sod9sobby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l8wxdq4kw"/><path class="sod9sobby"/></g>`,
		"fallback": "lucide-lab:toast",
	});
}

export default Component;
