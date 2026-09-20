import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htbbrjlzo.css';
import '../../css/h/hmqgikzpa.css';
import '../../css/h/howiqgbsw.css';
import '../../css/d/dhkuk8bie.css';
import '../../css/p/p1r_hs_-x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htbbrjlzo"/><path class="hmqgikzpa"/><circle transform="rotate(-44.781 37.124 22.122)" class="howiqgbsw"/><circle transform="rotate(-44.781 43.614 28.661)" class="dhkuk8bie"/><circle transform="rotate(-44.781 50.104 35.2)" class="p1r_hs_-x"/>`,
		"fallback": "openmoji:ticket",
	});
}

export default Component;
