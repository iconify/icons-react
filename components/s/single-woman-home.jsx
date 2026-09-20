import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbxvhyb9h.css';
import '../../css/l/l-c3p6b9h.css';
import '../../css/e/edxtuwbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dbxvhyb9h"/><path class="l-c3p6b9h"/><path class="edxtuwbsn"/></g>`,
		"fallback": "streamline-ultimate:single-woman-home",
	});
}

export default Component;
