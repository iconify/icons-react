import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlvk4dsgc.css';
import '../../css/c/cp3aa4bji.css';
import '../../css/k/ks7p16bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlvk4dsgc"/><rect class="cp3aa4bji"/><rect class="ks7p16bem"/><rect class="cp3aa4bji"/></g>`,
		"fallback": "stash:pagination-duotone",
	});
}

export default Component;
