import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5dagvgid.css';
import '../../css/b/bs5vd01ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p5dagvgid"/><path class="bs5vd01ch"/></g>`,
		"fallback": "lucide:popcorn",
	});
}

export default Component;
