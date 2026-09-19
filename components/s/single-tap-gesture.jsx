import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eotnb6bib.css';
import '../../css/a/at05jkbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eotnb6bib"/><path class="at05jkbvl"/></g>`,
		"fallback": "iconoir:single-tap-gesture",
	});
}

export default Component;
