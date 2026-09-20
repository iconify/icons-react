import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkt4g9irv.css';
import '../../css/g/g_c8_jb6c.css';
import '../../css/j/jgjjqf59v.css';
import '../../css/f/fws5csb2j.css';
import '../../css/l/ltfdigwdj.css';
import '../../css/c/cbe1v9beq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkt4g9irv"/><path class="g_c8_jb6c"/><path class="jgjjqf59v"/><path class="fws5csb2j"/><path class="ltfdigwdj"/><path class="cbe1v9beq"/>`,
		"fallback": "thesvg-color:sqldeveloper",
	});
}

export default Component;
