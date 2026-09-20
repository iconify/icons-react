import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-nigtb3b.css';
import '../../css/g/gdy4fzb-z.css';
import '../../css/h/h4k18ws8f.css';
import '../../css/m/m3gwznb_p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" transform="matrix(.2552 0 0 .2605 -260.446 -90.842)" class="f-nigtb3b"/><g transform="translate(-521.6 -12.27)scale(.3004)"><circle transform="translate(1726 30.29)scale(3.619)" class="gdy4fzb-z"/><path transform="matrix(.8494 0 0 .8671 869.4 -261.5)" class="h4k18ws8f"/></g><circle transform="translate(-3.131 -3.174)scale(1.087)" class="m3gwznb_p"/>`,
		"fallback": "openmoji:japanese-acceptable-button",
	});
}

export default Component;
