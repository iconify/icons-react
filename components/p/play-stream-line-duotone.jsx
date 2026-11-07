import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c01x__lky.css';
import '../../css/e/eiiamhb2z.css';
import '../../css/h/hr_fv7unq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c01x__lky"/><path class="eiiamhb2z"/><path class="hr_fv7unq"/></g>`,
		"fallback": "solar:play-stream-line-duotone",
	});
}

export default Component;
