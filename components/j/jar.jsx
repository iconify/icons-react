import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv84n0bii.css';
import '../../css/w/w8bgqeoji.css';
import '../../css/a/av4wpcl1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pv84n0bii"/><rect class="w8bgqeoji"/><path class="av4wpcl1n"/></g>`,
		"fallback": "lucide-lab:jar",
	});
}

export default Component;
