import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r1ykcdcgr.css';
import '../../css/e/e_h50bcta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r1ykcdcgr"/><path class="e_h50bcta"/></g>`,
		"fallback": "lucide-lab:motor-racing-helmet",
	});
}

export default Component;
