import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/j/j60t8hb-x.css';
import '../../css/d/d0gfj5yqu.css';
import '../../css/s/sl1flzbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="j60t8hb-x"/><path class="d0gfj5yqu"/><path class="sl1flzbmp"/>`,
		"fallback": "solar:soundwave-square-bold-duotone",
	});
}

export default Component;
