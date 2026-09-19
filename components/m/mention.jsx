import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/c/c3ctpngqm.css';
import '../../css/s/s4r7xqb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="aqhok2bbj"/><path class="c3ctpngqm"/><path class="s4r7xqb6f"/></g>`,
		"fallback": "akar-icons:mention",
	});
}

export default Component;
