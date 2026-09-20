import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bcqjjkohj.css';
import '../../css/n/n71b4nzut.css';
import '../../css/u/uoxjs6bit.css';
import '../../css/i/in-q1r46k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bcqjjkohj"/><path class="n71b4nzut"/><path class="uoxjs6bit"/><path class="in-q1r46k"/></g>`,
		"fallback": "solar:swimming-line-duotone",
	});
}

export default Component;
