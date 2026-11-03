import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9x94cctu.css';
import '../../css/a/at5rj_bep.css';
import '../../css/p/ptimbzbqj.css';
import '../../css/v/vl66h63zb.css';

const viewBox = {"width":608,"height":608};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w9x94cctu"><path transform="matrix(0 2.665 -2.7482 0 1003.016 -1657.67)" class="at5rj_bep"/><path class="logo-arrow-outer ptimbzbqj"/><path class="logo-arrow-inner vl66h63zb"/></g>`,
		"fallback": "thesvg-color:sabnzbd",
	});
}

export default Component;
