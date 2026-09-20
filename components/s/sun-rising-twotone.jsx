import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9u4uq.css';
import '../../css/i/iw1iew.css';
import '../../css/i/i5k6wm.css';
import '../../css/y/y4wbml.css';
import '../../css/j/j0_w7i.css';
import '../../css/d/d-ash02h.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9u4uq iw1iew"/><path class="i5k6wm iw1iew y4wbml"/><path class="iw1iew j0_w7i y4wbml"/>`,
		"fallback": "line-md:sun-rising-twotone",
	});
}

export default Component;
