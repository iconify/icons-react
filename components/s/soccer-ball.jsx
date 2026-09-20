import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzyx-5b6c.css';
import '../../css/w/w_klxbu6c.css';
import '../../css/e/ez_4otvdt.css';
import '../../css/x/xu4n-p7uu.css';
import '../../css/n/nahlbrvea.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzyx-5b6c"/><path class="w_klxbu6c"/><path class="ez_4otvdt"/><path class="xu4n-p7uu"/><path class="nahlbrvea"/>`,
		"fallback": "openmoji:soccer-ball",
	});
}

export default Component;
