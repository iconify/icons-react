import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3z3755al.css';
import '../../css/d/ds-8-acby.css';
import '../../css/r/rgxzhgbhs.css';
import '../../css/r/r3p4kujve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u3z3755al"/><path class="ds-8-acby"/><path class="rgxzhgbhs"/><path class="r3p4kujve"/></g>`,
		"fallback": "streamline-flex-color:search-arrow-increase",
	});
}

export default Component;
