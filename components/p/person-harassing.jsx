import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bea-nr_no.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bea-nr_no"/>`,
		"fallback": "fa6-solid:person-harassing",
	});
}

export default Component;
