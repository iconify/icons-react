import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mdd54lb3r.css';
import '../../css/p/pqt1il0sh.css';
import '../../css/t/tn1fpxiig.css';
import '../../css/f/fdgtrwbex.css';
import '../../css/v/v5rrpxcbz.css';
import '../../css/b/bzqecdc-r.css';
import '../../css/j/j6rnjebwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mdd54lb3r wm-shadow"/><path class="pqt1il0sh"/><path class="tn1fpxiig"/><path class="fdgtrwbex"/><path class="v5rrpxcbz"/><path class="bzqecdc-r wm-shine"/><path class="j6rnjebwe wm-deco"/></g>`,
		"fallback": "withicons-sticker:printer",
	});
}

export default Component;
