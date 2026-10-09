import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjpr8ebst.css';
import '../../css/f/f_bvfu90l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjpr8ebst"/><path class="f_bvfu90l"/>`,
		"fallback": "energy-icons:paw-20",
	});
}

export default Component;
