import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3jdh1b7v.css';
import '../../css/j/jo8444l-x.css';
import '../../css/s/s1t5fjbwp.css';
import '../../css/x/xwymurb0g.css';

const viewBox = {"width":300,"height":159};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u3jdh1b7v"/><path class="jo8444l-x"/><path class="s1t5fjbwp"/><path class="xwymurb0g"/></g>`,
		"fallback": "cif:us",
	});
}

export default Component;
