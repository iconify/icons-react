import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw28vh9ds.css';
import '../../css/k/kaqsw12py.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw28vh9ds"/><path class="kaqsw12py"/>`,
		"fallback": "selfhst:statamic-dark",
	});
}

export default Component;
