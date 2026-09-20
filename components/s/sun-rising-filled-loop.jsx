import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4y8tr.css';
import '../../css/i/iw1iew.css';
import '../../css/b/b4_xlz.css';
import '../../css/y/y4wbml.css';
import '../../css/f/f2pddx.css';
import '../../css/d/d-ash02h.css';
import '../../css/t/tr-2c6-rw.css';
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
		"content": `<path class="g4y8tr iw1iew"/><path class="b4_xlz iw1iew y4wbml"/><path class="f2pddx iw1iew y4wbml"/>`,
		"fallback": "line-md:sun-rising-filled-loop",
	});
}

export default Component;
