import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iebub3--k.css';
import '../../css/z/zkxf1fpeo.css';
import '../../css/s/s-_2zybqn.css';
import '../../css/a/a63o8drur.css';
import '../../css/l/lmf64gbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iebub3--k"/><path class="zkxf1fpeo"/><path class="s-_2zybqn"/><path class="a63o8drur"/><path class="lmf64gbqv"/></g>`,
		"fallback": "andrsrxn:users",
	});
}

export default Component;
