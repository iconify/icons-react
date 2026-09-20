import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6gwf2-xb.css';
import '../../css/o/o_t_4_bfo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6gwf2-xb"/><path class="o_t_4_bfo"/>`,
		"fallback": "openmoji:large-blue-diamond",
	});
}

export default Component;
