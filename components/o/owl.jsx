import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pfec3bieo.css';
import '../../css/w/wwjitibix.css';
import '../../css/q/q78cf5bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="pfec3bieo"/><path class="wwjitibix"/><path class="q78cf5bqg"/></g>`,
		"fallback": "lucide-lab:owl",
	});
}

export default Component;
