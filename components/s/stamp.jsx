import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/echsbn2pt.css';
import '../../css/s/spne74bta.css';
import '../../css/f/f8502mero.css';
import '../../css/y/yuzg1mofy.css';
import '../../css/a/afph40bky.css';
import '../../css/e/eiuxgcbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="echsbn2pt wm-shadow"/><path class="spne74bta wm-shadow"/><path class="f8502mero"/><path class="yuzg1mofy"/><path class="afph40bky"/><path class="eiuxgcbzv wm-s"/></g>`,
		"fallback": "withicons-brutal:stamp",
	});
}

export default Component;
